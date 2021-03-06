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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"fbb848eb-10b8-44f7-8f53-d65a9f820a03\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"fbb848eb-10b8-44f7-8f53-d65a9f820a03\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestIp\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1052',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fbb848eb-10b8-44f7-8f53-d65a9f820a03"',
  'x-ms-request-id': '2d748383-8505-4129-aae8-f365c3902c31',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14912',
  'x-ms-correlation-request-id': '210dced6-3682-447a-9ab6-b7d38ac3f6d7',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T082541Z:210dced6-3682-447a-9ab6-b7d38ac3f6d7',
  date: 'Thu, 21 May 2015 08:25:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"fbb848eb-10b8-44f7-8f53-d65a9f820a03\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"fbb848eb-10b8-44f7-8f53-d65a9f820a03\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateFronIp/providers/Microsoft.Network/publicIPAddresses/xplatTestIp\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1052',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fbb848eb-10b8-44f7-8f53-d65a9f820a03"',
  'x-ms-request-id': '2d748383-8505-4129-aae8-f365c3902c31',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14912',
  'x-ms-correlation-request-id': '210dced6-3682-447a-9ab6-b7d38ac3f6d7',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150521T082541Z:210dced6-3682-447a-9ab6-b7d38ac3f6d7',
  date: 'Thu, 21 May 2015 08:25:41 GMT',
  connection: 'close' });
 return result; }]];