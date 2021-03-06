// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"b01889dc-eaaa-445b-a318-01a0f132b184\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"b01889dc-eaaa-445b-a318-01a0f132b184\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/publicIPAddresses/xplatTestIpAP\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"LB-AddPoll\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB/backendAddressPools/LB-AddPoll\",\r\n        \"etag\": \"W/\\\"b01889dc-eaaa-445b-a318-01a0f132b184\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendIPConfigurations\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/networkInterfaces/xplatNicName/ipConfigurations/NIC-config\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1730',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"b01889dc-eaaa-445b-a318-01a0f132b184"',
  'x-ms-request-id': 'fa4b5a81-5ee2-464a-948b-cc93ce8a70cf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31965',
  'x-ms-correlation-request-id': 'bae34042-3995-4c3a-a98a-5dff4e013af1',
  'x-ms-routing-request-id': 'EASTASIA:20150427T092214Z:bae34042-3995-4c3a-a98a-5dff4e013af1',
  date: 'Mon, 27 Apr 2015 09:22:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"b01889dc-eaaa-445b-a318-01a0f132b184\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"b01889dc-eaaa-445b-a318-01a0f132b184\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/publicIPAddresses/xplatTestIpAP\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"LB-AddPoll\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB/backendAddressPools/LB-AddPoll\",\r\n        \"etag\": \"W/\\\"b01889dc-eaaa-445b-a318-01a0f132b184\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendIPConfigurations\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/networkInterfaces/xplatNicName/ipConfigurations/NIC-config\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1730',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"b01889dc-eaaa-445b-a318-01a0f132b184"',
  'x-ms-request-id': 'fa4b5a81-5ee2-464a-948b-cc93ce8a70cf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31965',
  'x-ms-correlation-request-id': 'bae34042-3995-4c3a-a98a-5dff4e013af1',
  'x-ms-routing-request-id': 'EASTASIA:20150427T092214Z:bae34042-3995-4c3a-a98a-5dff4e013af1',
  date: 'Mon, 27 Apr 2015 09:22:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/networkInterfaces?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatNicName\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/networkInterfaces/xplatNicName\",\r\n      \"etag\": \"W/\\\"1f5c37f8-6e9d-457f-9361-650061a78d60\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"ipConfigurations\": [\r\n          {\r\n            \"name\": \"NIC-config\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/networkInterfaces/xplatNicName/ipConfigurations/NIC-config\",\r\n            \"etag\": \"W/\\\"1f5c37f8-6e9d-457f-9361-650061a78d60\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAddress\": \"10.0.0.4\",\r\n              \"privateIPAllocationMethod\": \"Dynamic\",\r\n              \"subnet\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n              },\r\n              \"loadBalancerBackendAddressPools\": [\r\n                {\r\n                  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB/backendAddressPools/LB-AddPoll\"\r\n                }\r\n              ]\r\n            }\r\n          }\r\n        ],\r\n        \"dnsSettings\": {}\r\n      },\r\n      \"location\": \"westus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1541',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e091a70c-19d1-4c2f-91d9-f58002a3756c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31955',
  'x-ms-correlation-request-id': '2fa088e2-c7b0-467c-bfc6-9684118dc3cb',
  'x-ms-routing-request-id': 'EASTASIA:20150427T092215Z:2fa088e2-c7b0-467c-bfc6-9684118dc3cb',
  date: 'Mon, 27 Apr 2015 09:22:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/networkInterfaces?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"xplatNicName\",\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/networkInterfaces/xplatNicName\",\r\n      \"etag\": \"W/\\\"1f5c37f8-6e9d-457f-9361-650061a78d60\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"ipConfigurations\": [\r\n          {\r\n            \"name\": \"NIC-config\",\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/networkInterfaces/xplatNicName/ipConfigurations/NIC-config\",\r\n            \"etag\": \"W/\\\"1f5c37f8-6e9d-457f-9361-650061a78d60\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAddress\": \"10.0.0.4\",\r\n              \"privateIPAllocationMethod\": \"Dynamic\",\r\n              \"subnet\": {\r\n                \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n              },\r\n              \"loadBalancerBackendAddressPools\": [\r\n                {\r\n                  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB/backendAddressPools/LB-AddPoll\"\r\n                }\r\n              ]\r\n            }\r\n          }\r\n        ],\r\n        \"dnsSettings\": {}\r\n      },\r\n      \"location\": \"westus\"\r\n    }\r\n  ],\r\n  \"nextLink\": \"\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1541',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e091a70c-19d1-4c2f-91d9-f58002a3756c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31955',
  'x-ms-correlation-request-id': '2fa088e2-c7b0-467c-bfc6-9684118dc3cb',
  'x-ms-routing-request-id': 'EASTASIA:20150427T092215Z:2fa088e2-c7b0-467c-bfc6-9684118dc3cb',
  date: 'Mon, 27 Apr 2015 09:22:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/networkInterfaces/xplatNicName?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatNicName\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/networkInterfaces/xplatNicName\",\r\n  \"etag\": \"W/\\\"95da132d-e774-4e1c-ae5f-c77b640fac78\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"NIC-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/networkInterfaces/xplatNicName/ipConfigurations/NIC-config\",\r\n        \"etag\": \"W/\\\"95da132d-e774-4e1c-ae5f-c77b640fac78\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {}\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1094',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '94dce9ba-766b-4e87-9ac7-8d7b8cbed0e2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/94dce9ba-766b-4e87-9ac7-8d7b8cbed0e2?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-correlation-request-id': '25f817bb-c2a6-44d0-bba8-f54c803b8d0b',
  'x-ms-routing-request-id': 'EASTASIA:20150427T092217Z:25f817bb-c2a6-44d0-bba8-f54c803b8d0b',
  date: 'Mon, 27 Apr 2015 09:22:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/networkInterfaces/xplatNicName?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplatNicName\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/networkInterfaces/xplatNicName\",\r\n  \"etag\": \"W/\\\"95da132d-e774-4e1c-ae5f-c77b640fac78\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"NIC-config\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/networkInterfaces/xplatNicName/ipConfigurations/NIC-config\",\r\n        \"etag\": \"W/\\\"95da132d-e774-4e1c-ae5f-c77b640fac78\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/virtualNetworks/xplatTestVnetNIc/subnets/xplatTestSubnetNIc\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {}\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1094',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '94dce9ba-766b-4e87-9ac7-8d7b8cbed0e2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/94dce9ba-766b-4e87-9ac7-8d7b8cbed0e2?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1189',
  'x-ms-correlation-request-id': '25f817bb-c2a6-44d0-bba8-f54c803b8d0b',
  'x-ms-routing-request-id': 'EASTASIA:20150427T092217Z:25f817bb-c2a6-44d0-bba8-f54c803b8d0b',
  date: 'Mon, 27 Apr 2015 09:22:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/94dce9ba-766b-4e87-9ac7-8d7b8cbed0e2?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'be4a8c03-e01c-4f85-82b9-c94acc575bbf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31952',
  'x-ms-correlation-request-id': '7f395829-fc67-45e1-afc4-41420246944a',
  'x-ms-routing-request-id': 'EASTASIA:20150427T092218Z:7f395829-fc67-45e1-afc4-41420246944a',
  date: 'Mon, 27 Apr 2015 09:22:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/94dce9ba-766b-4e87-9ac7-8d7b8cbed0e2?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'be4a8c03-e01c-4f85-82b9-c94acc575bbf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31952',
  'x-ms-correlation-request-id': '7f395829-fc67-45e1-afc4-41420246944a',
  'x-ms-routing-request-id': 'EASTASIA:20150427T092218Z:7f395829-fc67-45e1-afc4-41420246944a',
  date: 'Mon, 27 Apr 2015 09:22:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"f0ce1a96-0fb6-489a-bac1-0cba7f4a3ccd\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"f0ce1a96-0fb6-489a-bac1-0cba7f4a3ccd\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/publicIPAddresses/xplatTestIpAP\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"LB-AddPoll\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB/backendAddressPools/LB-AddPoll\",\r\n        \"etag\": \"W/\\\"f0ce1a96-0fb6-489a-bac1-0cba7f4a3ccd\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1452',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f0ce1a96-0fb6-489a-bac1-0cba7f4a3ccd"',
  'x-ms-request-id': 'fa5fbe74-a5aa-4edf-9d6b-8b43259931c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31947',
  'x-ms-correlation-request-id': '91d679bf-1de0-46f3-89c6-8363746d0917',
  'x-ms-routing-request-id': 'EASTASIA:20150427T092220Z:91d679bf-1de0-46f3-89c6-8363746d0917',
  date: 'Mon, 27 Apr 2015 09:22:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"f0ce1a96-0fb6-489a-bac1-0cba7f4a3ccd\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"f0ce1a96-0fb6-489a-bac1-0cba7f4a3ccd\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/publicIPAddresses/xplatTestIpAP\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"LB-AddPoll\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestinggrp/providers/Microsoft.Network/loadBalancers/armEmptyLB/backendAddressPools/LB-AddPoll\",\r\n        \"etag\": \"W/\\\"f0ce1a96-0fb6-489a-bac1-0cba7f4a3ccd\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1452',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f0ce1a96-0fb6-489a-bac1-0cba7f4a3ccd"',
  'x-ms-request-id': 'fa5fbe74-a5aa-4edf-9d6b-8b43259931c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31947',
  'x-ms-correlation-request-id': '91d679bf-1de0-46f3-89c6-8363746d0917',
  'x-ms-routing-request-id': 'EASTASIA:20150427T092220Z:91d679bf-1de0-46f3-89c6-8363746d0917',
  date: 'Mon, 27 Apr 2015 09:22:20 GMT',
  connection: 'close' });
 return result; }]];