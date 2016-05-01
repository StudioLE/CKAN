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

  $scope.sortType = 'status' 
  // $scope.sortType = 'source_module.name'
  $scope.sortReverse = false
  $scope.searchFish = ''

  $scope.modules = function() {
    return modules
  }

  $scope.selected = false
  $scope.selectedMod = false

  $scope.select = function(key, mod) {
    // If already selected
    if($scope.selected == key) {
      $scope.selected = false
      $scope.selectedMod = false
    }
    else {
      $scope.selected = key
      $scope.selectedMod = mod
    }
  }

})
