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
var util = require('util');
var async = require('async');

var utils = require('../../../util/utils');
var $ = utils.getLocaleString;

function VMImage(cli, serviceClients, resourceGroupName, params) {
  this.cli = cli;
  this.serviceClients = serviceClients;
  this.resourceGroupName = resourceGroupName;
  this.params = params;
}

__.extend(VMImage.prototype, {
  getVMImagePublisherList: function (location, _) {
    var publishers;
    var progress = this.cli.interaction.progress(util.format($('Getting virtual machine image publishers (Location: "%s")'), location));
    try {
      publishers = this.serviceClients.computeManagementClient.virtualMachineImages.listPublishers({location: location}, _);
    } finally {
      progress.end();
    }

    return publishers;
  },

  getVMImageOffersList: function (location, publisherName, _) {
    var offers;
    var progress = this.cli.interaction.progress(util.format($('Getting virtual machine image offers (Publisher: "%s" Location:"%s")'), publisherName, location));
    try {
      offers = this.serviceClients.computeManagementClient.virtualMachineImages.listOffers({
        location: location,
        publisherName: publisherName
      }, _);
    } finally {
      progress.end();
    }

    offers.resources.map(function(sku){
      sku.publisher = publisherName;
      return sku;
    });

    return offers;
  },

  getVMImageSkusList: function (location, publisherName, offer, _) {
    var skus;
    var progress = this.cli.interaction.progress(util.format($('Getting virtual machine image skus (Publisher:"%s" Offer:"%s" Location:"%s")'), publisherName, offer, location));
    try {
      skus = this.serviceClients.computeManagementClient.virtualMachineImages.listSkus({
        location: location,
        publisherName: publisherName,
        offer: offer
      }, _);
    } finally {
      progress.end();
    }

    skus.resources.map(function(sku){
      sku.publisher = publisherName;
      sku.offer = offer;
      return sku;
    });

    return skus;
  },

  getVMImageListForSku: function (location, publisherName, offer, skus, _) {
    var images;
    var progress = this.cli.interaction.progress(util.format($('Getting virtual machine images (Publisher:"%s" Offer:"%s" Sku: "%s" Location:"%s")'), publisherName, offer, skus, location));
    try {
      images = this.serviceClients.computeManagementClient.virtualMachineImages.list({
        location: location,
        publisherName: publisherName,
        offer: offer,
        skus: skus
      }, _);
    } finally {
      progress.end();
    }

    return images;
  },

  getVMImageList: function (imageFilter, _) {
    if (!imageFilter.location) {
      throw new Error($('--location is required'));
    }

    var that = this;
    var images;
    var skusCollection = [];
    var imageQueries = [];

    if (imageFilter.publishername && imageFilter.offer && imageFilter.skus) {
      images = this.getVMImageListForSku(imageFilter.location, imageFilter.publishername, imageFilter.offer, imageFilter.skus, _);
      images.resources.map(function(image){
        image.publisher = imageFilter.publishername;
        image.offer = imageFilter.offer;
        image.skus = imageFilter.skus;
        image.urn = imageFilter.publishername + ':' + imageFilter.offer + ':' + imageFilter.skus + ':' + image.name;
      });

      return images;
    }

    if (imageFilter.publishername && imageFilter.offer) {
      this.cli.output.info('The parameter --sku if specified will be ignored');
      skusCollection = this.getVMImageSkusList(imageFilter.location, imageFilter.publishername, imageFilter.offer, _);
      imageQueries = [];
      skusCollection.resources.forEach( function(skus) {
        imageQueries.push(function(callBack) {
          skus = skus;
          that.serviceClients.computeManagementClient.virtualMachineImages.list({
            location: imageFilter.location,
            publisherName: imageFilter.publishername,
            offer: imageFilter.offer,
            skus: skus.name
          }, function(error, vmImages) {
            vmImages = error ? { resources: [] } : vmImages;
            vmImages.skus = skus.name;
            skus.vmImages = vmImages;
            return callBack(error, vmImages);
          });
        });
      });

      async.parallel(imageQueries, _);
      images = [];
      // Flatten the collection
      skusCollection.resources.forEach( function(skus) {
        skus.vmImages.resources.forEach( function (image) {
          image.publisher = imageFilter.publishername;
          image.offer = imageFilter.offer;
          image.skus = skus.vmImages.skus;
          image.urn = image.publisher + ':' +image.offer + ':' + image.skus + ':' + image.name;
          images.push(image);
        });
      });

      return { resources: images };
    }

    if (imageFilter.publishername) {
      this.cli.output.info('The parameters --offer and --sku if specified will be ignored');
      var offers = this.getVMImageOffersList(imageFilter.location, imageFilter.publishername, _);
      var skuQueries = [];
      offers.resources.forEach( function(offer) {
        skuQueries.push(function(callBack) {
          offer = offer;
          that.serviceClients.computeManagementClient.virtualMachineImages.listSkus({
            location: imageFilter.location,
            publisherName: imageFilter.publishername,
            offer: offer.name
          }, function (error, skus) {
            skus = error ? { resources: [] } : skus;
            skus.offer = offer.name;
            offer.skus = skus;
            return callBack(error, skus);
          });
        });
      });

      var skusCollections = async.parallel(skuQueries, _);
      imageQueries = [];
      skusCollections.forEach( function(skusCollection) {
        skusCollection.resources.forEach( function(skus) {
          imageQueries.push(function(callBack) {
            skus = skus;
            that.serviceClients.computeManagementClient.virtualMachineImages.list({
              location: imageFilter.location,
              publisherName: imageFilter.publishername,
              offer: skusCollection.offer,
              skus: skus.name
            }, function(error, vmImages) {
              vmImages = error ? { resources: [] } : vmImages;
              vmImages.skus = skus.name;
              skus.vmImages = vmImages;
              return callBack(error, vmImages);
            });
          });
        });
      });

      async.parallel(imageQueries, _);
      imageQueries = [];
      // Flatten the collection
      skusCollections.forEach (function (skusCollection) {
        skusCollection.resources.forEach(function (skus) {
          skus.vmImages.resources.forEach(function (image) {
            imageQueries.push(function(callBack) {
              that.serviceClients.computeManagementClient.virtualMachineImages.get({
                location: imageFilter.location,
                offer: skusCollection.offer,
                publisherName: imageFilter.publishername,
                skus: skus.name,
                version: image.name
              }, function(error, imgResult) {
                if (error) {
                  return callBack(error);
                }
                imgResult = error ? { oSDiskImage: {}, dataDiskImages: [] } : imgResult.virtualMachineImage;
                image.publisher = imageFilter.publishername;
                image.offer = skusCollection.offer;
                image.skus = skus.name;
                image.urn = image.publisher + ':' +image.offer + ':' + image.skus + ':' + image.name;
                image.operatingSystem = imgResult.oSDiskImage.operatingSystem;
                image.dataDiskImages = imgResult.dataDiskImages;
                image.purchasePlan = imgResult.purchasePlan;
                return callBack(null, image);
              });
            });
          });
        });
      });
      var imageCollection = async.parallel(imageQueries, _);

      return { resources: imageCollection };
    }
  }
});

module.exports = VMImage;