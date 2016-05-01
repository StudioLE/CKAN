'use strict'

angular.module('app.registryFactory', [])

/*****************************************************************
*
* Registry factory
*
******************************************************************/
.factory('Registry', function(localStorageService, $http, Config) {
  return {

    /**
     * Data load
     *
     * @return {Array} data
     */
    load: function(callback) {
      var self = this

      $http({
        method: 'GET',
        url: Config.registry_url
      }).then(function successCallback(response) {
        console.log(response)
        var data = {
          // available_modules: response.data.available_modules,
          installed_modules: response.data.installed_modules,
        }
        console.log(data)
        return self.set(data)
        // return callback(null)
      }, function errorCallback(response) {
        console.error('Registry.load() failed')
        console.error(true, response)
        // return callback(response)
      })
    },

    /**
     * Data getter
     *
     * @return {Array} data
     */
    get: function() {
      return localStorageService.get('registry')
    },

    /**
     * Data setter
     *
     * @return {Array} data
     */
    set: function(data) {
      return localStorageService.set('registry', data)
    },

    /**
     * Data is set
     *
     * @return {Bool} data
     */
    isset: function() {
      if(localStorageService.get('registry')) {
        return true
      }
      else {
        return false
      }
    },

    /**
     * Data unset
     */
    unset: function() {
      return localStorageService.remove('registry')
    }
  }
})
