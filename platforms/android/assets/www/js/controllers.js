angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('ModuleCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
