"use strict";angular.module("sbAdminApp").service("httpi",function($http){function httpProxy(config){return config.url=interpolateUrl(config.url,config.params,config.data),$http(config)}function interpolateUrl(url,params,data){return params=params||{},data=data||{},url=url.replace(/(\(\s*|\s*\)|\s*\|\s*)/g,""),url=url.replace(/:([a-z]\w*)/gi,function($0,label){return popFirstKey(data,params,label)||""}),url=url.replace(/(^|[^:])[\/]{2,}/g,"$1/"),url=url.replace(/\/+$/i,"")}function popFirstKey(object1,object2,objectN,key){var objects=Array.prototype.slice.call(arguments);key=objects.pop();for(var object=objects.shift();object;){if(object.hasOwnProperty(key))return popKey(object,key);object=objects.shift()}}function popKey(object,key){var value=object[key];return delete object[key],value}return httpProxy});