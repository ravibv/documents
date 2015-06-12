/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __ = require('underscore');
var fs = require('fs');
var utils = require('../../../util/utils');
var util = require('util');
var tagUtils = require('../tag/tagUtils');
var path = require('path');
var exec = require('child_process').exec;
var openssl = require('openssl-wrapper');
var EndPointUtil = require('../../../util/endpointUtil');

var $ = utils.getLocaleString;

function VMExtensionProfile(cli, params) {
    this.cli = cli;
    this.params = params;
}

__.extend(VMExtensionProfile.prototype, {
  generateExtensionProfile: function() {
    var extensionProfile = this._parseExtensionProfileParams(this.params);
    return {
      profile: extensionProfile
    };
  },

  generateDockerExtensionProfile: function(_) {
    if ((this.params.dockerPort && typeof this.params.dockerPort === 'boolean') || !this.params.dockerPort) {
      this.params.dockerPort = 4243;
    } else {
      var endPointUtil = new EndPointUtil();
      var dockerPortValidation = endPointUtil.validatePort(this.params.dockerPort, 'docker port');
      if (dockerPortValidation.error) {
        throw new Error(dockerPortValidation.error);
      }
    }

    if ((this.params.dockerCertDir && typeof this.params.dockerCertDir === 'boolean') || !this.params.dockerCertDir) {
      var homePath = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
      this.params.dockerCertDir = path.join(homePath, '.docker');
    }

    if (utils.stringIsNullOrEmpty(this.params.version)) {
      this.params.version = '0.6';
    }

    var dockerCertPaths = {
      caKey: path.join(this.params.dockerCertDir, 'ca-key.pem'),
      ca: path.join(this.params.dockerCertDir, 'ca.pem'),
      serverKey: path.join(this.params.dockerCertDir, 'server-key.pem'),
      server: path.join(this.params.dockerCertDir, 'server.csr'),
      serverCert: path.join(this.params.dockerCertDir, 'server-cert.pem'),
      clientKey: path.join(this.params.dockerCertDir, 'key.pem'),
      client: path.join(this.params.dockerCertDir, 'client.csr'),
      clientCert: path.join(this.params.dockerCertDir, 'cert.pem')
    };

    this._checkAndGenerateDockerCertificatesIfNeeded(dockerCertPaths, _);

    this.params.extensionName = 'DockerExtension';
    this.params.publisherName = 'MSOpenTech.Extensions';
    this.params.publicConfig = this._createDockerPublicConfiguration();
    this.params.privateConfig = this._createDockerPrivateConfiguration(dockerCertPaths);

    return this.generateExtensionProfile();
  },

  generateVMAccessExtensionProfile: function() {
    if (this.params.osType === 'Linux') {
      return this._generateVMAccessLinuxProfile();
    } else if (this.params.osType === 'Windows') {
      return this._generateVMAccessWindowsProfile();
    }

    return null;
  },

  _generateVMAccessLinuxProfile: function() {
    if (utils.stringIsNullOrEmpty(this.params.userName) &&
        utils.stringIsNullOrEmpty(this.params.removeUser) &&
        !this.params.resetSsh) {
      throw new Error($('Either --user-name or --remove-user or --reset-ssh params are required.'));
    }

    if (!utils.stringIsNullOrEmpty(this.params.userName)) {
      if (utils.stringIsNullOrEmpty(this.params.password) && utils.stringIsNullOrEmpty(this.params.sshKeyFile)) {
        throw new Error(util.format($('Either password or SSH key are required to reset access for user %s.'), this.params.userName));
      }
    }

    if (utils.stringIsNullOrEmpty(this.params.version)) {
      this.params.version = '1.1';
    }

    this.params.extensionName = 'VMAccessForLinux';
    this.params.publisherName = 'Microsoft.OSTCExtensions';
    this.params.privateConfig = this._createVMAccessLinuxPrivateConfig();

    return this.generateExtensionProfile();
  },

  _generateVMAccessWindowsProfile: function() {
    if (utils.stringIsNullOrEmpty(this.params.userName) || utils.stringIsNullOrEmpty(this.params.password)) {
      throw new Error($('Both user name and password are required.'));
    }

    if (!utils.stringIsNullOrEmpty(this.params.removeUser) ||
        this.params.resetSsh ||
        !utils.stringIsNullOrEmpty(this.params.sshKeyFile)) {
      this.cli.output.warn($('Resetting access on Windows VM, --reset-ssh, --ssh-key-file and--remove-user parameters will be ignored.'));
    }

    if (utils.stringIsNullOrEmpty(this.params.version)) {
      this.params.version = '2.0';
    }

    this.params.extensionName = 'VMAccessAgent';
    this.params.publisherName = 'Microsoft.Compute';
    this.params.publicConfig = { UserName: this.params.userName };
    this.params.privateConfig = { Password: this.params.password };

    return this.generateExtensionProfile();
  },

  _parseExtensionProfileParams: function(params) {
    if (params.publicConfig && params.publicConfigPath) {
      throw new Error($('Both optional parameters --public-config and --public-config-path cannot be specified together.'));
    }

    if (params.privateConfig && params.privateConfigPath) {
      throw new Error($('Both optional parameters --private-config and --private-config-path cannot be specified together.'));
    }

    var extensionProfile = {
      name: params.extensionName,
      type: 'Microsoft.Compute/virtualMachines/extensions',
      location: params.location,
      tags: null,
      publisher: params.publisherName,
      extensionType: params.extensionName,
      typeHandlerVersion: params.version,
      settings: null,
      protectedSettings: null
    };

    if (params.publicConfig) {
      if (typeof params.publicConfig === 'string') {
        extensionProfile.settings = this._parseExtensionConfig(params.publicConfig, $('Error parsing public config'));
      } else {
        extensionProfile.settings = params.publicConfig;
      }
    }

    if (params.privateConfig) {
      if (typeof params.privateConfig === 'string') {
        extensionProfile.protectedSettings = this._parseExtensionConfig(params.privateConfig, $('Error parsing private config'));
      } else {
        extensionProfile.protectedSettings = params.privateConfig;
      }
    }

    if (params.publicConfigPath) {
      var publicConfig = fs.readFileSync(params.publicConfigPath);
      extensionProfile.settings = this._parseExtensionConfig(publicConfig.toString(), util.format($('Error parsing public config from file %s'), params.publicConfigPath));
    }

    if (params.privateConfigPath) {
      var privateConfig = fs.readFileSync(params.privateConfigPath);
      extensionProfile.protectedSettings = this._parseExtensionConfig(privateConfig.toString(), util.format($('Error parsing private config from file %s'), params.privateConfigPath));
    }

    if (params.tags) {
      extensionProfile.tags = {};
      extensionProfile.tags = tagUtils.buildTagsParameter(extensionProfile.tags, { tags: params.tags });
    }

    return extensionProfile;
  },

  _parseExtensionConfig: function(config, errorMessage) {
    try {
      var parsedConfig = JSON.parse(config);
      return parsedConfig;
    } catch (err) {
      throw new Error(util.format($('%s. %s'), errorMessage, err));
    }
  },

  _createVMAccessLinuxPrivateConfig: function() {
    var privateConfig = {};

    if (this.params.resetSsh) {
      privateConfig['reset_ssh'] = true;
    }

    if (!utils.stringIsNullOrEmpty(this.params.userName)) {
      privateConfig['username'] = this.params.userName;
    }

    if (!utils.stringIsNullOrEmpty(this.params.password)) {
      privateConfig['password'] = this.params.password;
    }

    if (!utils.stringIsNullOrEmpty(this.params.expiration)) {
      privateConfig['expiration'] = this.params.expiration;
    }

    if (!utils.stringIsNullOrEmpty(this.params.sshKeyFile)) {
      var publicKey = this._parseSSHPublicKeyPemFile(this.params.sshKeyFile);
      privateConfig['ssh_key'] = publicKey;
    }

    if (!utils.stringIsNullOrEmpty(this.params.removeUser)) {
      privateConfig['remove_user'] = this.params.removeUser;
    }

    return privateConfig;
  },

  _parseSSHPublicKeyPemFile: function (sshKeyFile) {
    this.cli.output.info(util.format($('Verifying the public key SSH file: %s'), sshKeyFile));
    var sshPublickeyPemData = fs.readFileSync(sshKeyFile);
    var sshPublickeyPemDataStr = sshPublickeyPemData.toString();
    if (!utils.isPemCert(sshPublickeyPemDataStr)) {
      throw new Error($('Specified SSH public key file is not in PEM format'));
    }

    return sshPublickeyPemDataStr;
  },

  _checkAndGenerateDockerCertificatesIfNeeded: function(dockerCertPaths, _) {
    var dockerDirExists = utils.fileExists(this.params.dockerCertDir, _);
    var progress;
    if (!dockerDirExists) {
      this.cli.output.verbose($('Docker certificates were not found.'));
      fs.mkdir(this.params.dockerCertDir, _);
      progress = this.cli.interaction.progress($('Generating docker certificates.'));
      try {
        this._generateDockerCertificates(dockerCertPaths, _);
      } finally {
        progress.end();
      }
    } else {
      // We need to check if all certificates are in place.
      // If not, generate them from scratch
      var missingCertificates = this._checkExistingDockerCertificates(dockerCertPaths, _);
      if (missingCertificates.length === 0) {
        this.cli.output.verbose($('Found docker certificates.'));
        return;
      }

      for (i = 0; i < missingCertificates.length; i++) {
        this.cli.output.verbose(missingCertificates[i]);
      }

      progress = this.cli.interaction.progress($('Generating docker certificates.'));
      try {
        this._generateDockerCertificates(dockerCertPaths, _);
      } finally {
        progress.end();
      }
    }
  },

  _checkExistingDockerCertificates: function(dockerCertPaths, _) {
    var missingCertificateErrors = [];
    this._checkIfDockerCertificateExist(missingCertificateErrors, dockerCertPaths.caKey, _);
    this._checkIfDockerCertificateExist(missingCertificateErrors, dockerCertPaths.ca, _);
    this._checkIfDockerCertificateExist(missingCertificateErrors, dockerCertPaths.serverKey, _);
    this._checkIfDockerCertificateExist(missingCertificateErrors, dockerCertPaths.serverCert, _);
    this._checkIfDockerCertificateExist(missingCertificateErrors, dockerCertPaths.clientKey, _);
    this._checkIfDockerCertificateExist(missingCertificateErrors, dockerCertPaths.clientCert, _);

    return missingCertificateErrors;
  },

  _checkIfDockerCertificateExist: function(missingCertificateErrors, filepath, _) {
    var fileExists = utils.fileExists(filepath, _);
    if (!fileExists) {
      missingCertificateErrors.push(util.format($('%s file was not found'), filepath));
    }
  },

  _generateDockerCertificates: function(dockerCertPaths, _) {
      /*jshint camelcase: false */
      var password = 'Docker123';
      this.cli.output.verbose(util.format($('Password for docker certificates is "%s"'), password));
      exec('openssl version', function(error, stdout, stderr) {
        if (stderr) {
          throw new Error(util.format($('Please install/configure OpenSSL client. Error: %s'), stderr));
        }
      });
      this._executeOpensslCommand('genrsa', {
        des3: true,
        passout: 'pass:' + password,
        out: dockerCertPaths.caKey
      }, _);

      this._executeOpensslCommand('req', {
        new: true,
        x509: true,
        days: 365,
        passin: 'pass:' + password,
        subj: '/C=AU/ST=Some-State/O=Internet Widgits Pty Ltd/CN=\\*.cloudapp.net',
        key: dockerCertPaths.caKey,
        out: dockerCertPaths.ca
      },  _);

      this._executeOpensslCommand('genrsa', {
        des3: true,
        passout: 'pass:' + password,
        out: dockerCertPaths.serverKey
      },  _);

      this._executeOpensslCommand('req', {
        new: true,
        passin: 'pass:' + password,
        subj: '/C=AU/ST=Some-State/O=Internet Widgits Pty Ltd/CN=\\*.cloudapp.net',
        key: dockerCertPaths.serverKey,
        out: dockerCertPaths.server
      },  _);

      this._executeOpensslCommand('x509', {
        req: true,
        days: 365,
        in : dockerCertPaths.server,
        passin: 'pass:' + password,
        set_serial: 01,
        CA: dockerCertPaths.ca,
        CAkey: dockerCertPaths.caKey,
        out: dockerCertPaths.serverCert
      },  _);

      this._executeOpensslCommand('genrsa', {
        des3: true,
        passout: 'pass:' + password,
        out: dockerCertPaths.clientKey
      },  _);

      this._executeOpensslCommand('req', {
        new: true,
        passin: 'pass:' + password,
        subj: '/C=AU/ST=Some-State/O=Internet Widgits Pty Ltd/CN=\\*.cloudapp.net',
        key: dockerCertPaths.clientKey,
        out: dockerCertPaths.client
      },  _);

      var configPath = path.join(this.params.dockerCertDir, 'extfile.cnf');
      fs.writeFile(configPath, 'extendedKeyUsage = clientAuth',  _);
      this._executeOpensslCommand('x509', {
        req: true,
        days: 365,
        in : dockerCertPaths.client,
        passin: 'pass:' + password,
        set_serial: 01,
        extfile: configPath,
        CA: dockerCertPaths.ca,
        CAkey: dockerCertPaths.caKey,
        out: dockerCertPaths.clientCert
      },  _);

      this._executeOpensslCommand('rsa', {
        passin: 'pass:' + password,
        in : dockerCertPaths.serverKey,
        passout: 'pass:' + password,
        out: dockerCertPaths.serverKey
      },  _);

      this._executeOpensslCommand('rsa', {
        passin: 'pass:' + password,
        in : dockerCertPaths.clientKey,
        passout: 'pass:' + password,
        out: dockerCertPaths.clientKey
      },  _);

      // setting cert permissions
      fs.chmodSync(dockerCertPaths.caKey, 0600);
      fs.chmodSync(dockerCertPaths.ca, 0600);
      fs.chmodSync(dockerCertPaths.serverKey, 0600);
      fs.chmodSync(dockerCertPaths.server, 0600);
      fs.chmodSync(dockerCertPaths.serverCert, 0600);
      fs.chmodSync(dockerCertPaths.clientKey, 0600);
      fs.chmodSync(dockerCertPaths.client, 0600);
      fs.chmodSync(configPath, 0600);
      fs.chmodSync(dockerCertPaths.clientCert, 0600);
      return;
  },

  _executeOpensslCommand: function(command, options, _) {
    try {
      openssl.exec(command, options, _);
    } catch (err) {
      this.cli.output.verbose(err);
    }
  },

  _createDockerPublicConfiguration: function() {
    var publicConfig = {
      dockerport: this.params.dockerPort
    };

    return publicConfig;
  },

  _createDockerPrivateConfiguration: function(dockerCertPaths) {
    var certs = this._getDockerServerCertsInBase64(dockerCertPaths);
    var privateConfig = {};
    privateConfig['ca'] = certs.caCert;
    privateConfig['server-cert'] = certs.serverCert;
    privateConfig['server-key'] = certs.serverKey;

    return privateConfig;
  },

  _getDockerServerCertsInBase64: function(dockerCertPaths) {
    var caCert = this._convertFileToBase64(dockerCertPaths.ca);
    var serverKey = this._convertFileToBase64(dockerCertPaths.serverKey);
    var serverCert = this._convertFileToBase64(dockerCertPaths.serverCert);

    return {
      caCert: caCert,
      serverKey: serverKey,
      serverCert: serverCert
    };
  },

  _convertFileToBase64: function(filePath) {
    var file = fs.readFileSync(filePath);
    return new Buffer(file).toString('base64');
  }
});

module.exports = VMExtensionProfile;