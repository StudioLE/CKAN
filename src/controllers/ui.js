'use strict'

angular.module('app.ui', ['jsonFormatter'])

/*****************************************************************
*
* UI controlller
*
******************************************************************/
.controller('UICtrl', function($scope, Config, Modules) {
  /**
   * Load and concatenate modules
   */
  var modules
  Modules.get().then(function(data){
    modules = data
    console.log(modules)
  })

  $scope.modules = function() {
    return modules
  }

  $scope.selected = false

  $scope.select = function(key) {
    // If already selected
    if($scope.selected == key) {
      $scope.selected = false
    }
    else {
      $scope.selected = key
    }
  }

})
