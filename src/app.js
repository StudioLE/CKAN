'use strict'

/*****************************************************************
*
* Declare app level module which depends on views, and components
*
******************************************************************/
angular.module('app', [
  'ngResource',
  'LocalStorageModule',
  'app.config',
  'app.ui',
  'app.registryFactory',
  'app.modulesFactory'
])

/*****************************************************************
*
* Lodash
*
******************************************************************/
.constant('_', window._)

/*****************************************************************
*
* Bytes filter
* https://gist.github.com/thomseddon/3511330
*
******************************************************************/
.filter('bytes', function() {
  return function(bytes, precision) {
    if (bytes==0 || isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
    if (typeof precision === 'undefined') precision = 1;
    var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
      number = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) +  ' ' + units[number];
  }
})