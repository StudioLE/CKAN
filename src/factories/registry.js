'use strict'

angular.module('app.registryFactory', [])

/*****************************************************************
*
* Registry factory
*
******************************************************************/
.factory('Registry', function($http, Config) {
  return {

    /**
     * Data load
     *
     * @return {Array} data
     */
    load: function() {
      return $http({
        method: 'GET',
        url: Config.registry_url
      }).then(function successCallback(response) {
        return {
          available_modules: response.data.available_modules,
          installed_modules: response.data.installed_modules,
        }
      }, function errorCallback(response) {
        console.error('Registry.load() failed')
        console.error(true, response)
      })
    }
  }
})
