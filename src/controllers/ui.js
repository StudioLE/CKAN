'use strict'

angular.module('app.ui', ['jsonFormatter'])

/*****************************************************************
*
* UI controlller
*
******************************************************************/
.controller('UICtrl', function($scope, Config, Registry) {
  var registry

  /**
   * Load the registry
   */
  Registry.load().then(function(data){
    registry = data
    console.log(registry)
  })

  $scope.registry = function() {
    return registry
  }

  $scope.selected = false 
  // $scope.selected = registry.installed_modules[Object.keys(registry.installed_modules)[0]]

  $scope.select = function(key, mod) {
  	mod.key = key
  	$scope.selected = mod
    return true
  }

})
