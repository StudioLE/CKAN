'use strict'

angular.module('app.ui', ['jsonFormatter'])

/*****************************************************************
*
* UI controlller
*
******************************************************************/
.controller('UICtrl', function($scope, Config, Modules) {
  var modules

  /**
   * Load the registry
   */
  Modules.get().then(function(data){
    modules = data
    console.log(modules)
  })

  $scope.modules = function() {
    return modules
  }

  $scope.selected = false 
  // $scope.selected = registry.installed_modules[Object.keys(registry.installed_modules)[0]]

  $scope.select = function(key, mod) {
  	mod.key = key
  	$scope.selected = mod
    return true
  }

})
