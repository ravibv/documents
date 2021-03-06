// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"eb191034-346e-415b-87ad-b64c451d92fb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag\": \"\",\r\n    \"tag2\": \"val\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '380',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"eb191034-346e-415b-87ad-b64c451d92fb"',
  'x-ms-request-id': '9456f66d-c60c-4aea-b6c0-942a3ef61d53',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': 'e8a6e084-6e82-48fe-a0ee-fe684233ddf3',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081641Z:e8a6e084-6e82-48fe-a0ee-fe684233ddf3',
  date: 'Thu, 21 May 2015 08:16:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlb\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLb/providers/Microsoft.Network/loadBalancers/xplattestlb\",\r\n  \"etag\": \"W/\\\"eb191034-346e-415b-87ad-b64c451d92fb\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag\": \"\",\r\n    \"tag2\": \"val\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '380',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"eb191034-346e-415b-87ad-b64c451d92fb"',
  'x-ms-request-id': '9456f66d-c60c-4aea-b6c0-942a3ef61d53',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': 'e8a6e084-6e82-48fe-a0ee-fe684233ddf3',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T081641Z:e8a6e084-6e82-48fe-a0ee-fe684233ddf3',
  date: 'Thu, 21 May 2015 08:16:41 GMT',
  connection: 'close' });
 return result; }]];