'use strict'

angular.module('app.ui', ['jsonFormatter'])

/*****************************************************************
*
* UI controlller
*
******************************************************************/
.controller('UICtrl', function($scope, $timeout, Config, Modules) {
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

  $scope.showProgress = true
  $scope.progressText = 'Updating repositories'
  $scope.progress = 0

  var updateProgress = function() {
    $scope.progress = $scope.progress + 5
    console.log($scope.progress)
    if($scope.progress < 100) {
      $timeout(updateProgress, 500)
    }
    else {
      $scope.progressText = 'Repositories Updated'
      $timeout(function() {
        $scope.showProgress = false
      }, 2000)
    }
  }

  if($scope.showProgress) updateProgress()

  $scope.sortType = 'status' 
  // $scope.sortType = 'source_module.name'
  $scope.sortReverse = false
  $scope.searchTerm = ''
  $scope.searchCol = 'name'
  $scope.searchObj = {
    source_module: {
      name: $scope.searchTerm 
    } 
  }

  $scope.search = function(term, col) {
    if(col == 'name') {
      $scope.searchObj = {
        source_module: {
          name: term
        } 
      }
    }
    else if(col == 'author') {
      $scope.searchObj = {
        source_module: {
          author: term
        } 
      }
    }
    else if(col == 'status') {
      $scope.searchObj = {
        status: term
      }
    }
    else {
      $scope.searchObj = {
        $: term
      }
    }
  }

 

})
