'use strict';

/**
 * @ngdoc function
 * @name cirrusAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cirrusAppApp
 */
angular.module('cirrusAppApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.lowerBound = 0;
    $scope.upperBound = 0;
    $scope.solution = '';
    $scope.error = '';
    $scope.isError = false;
    $scope.isSuccess = false;

    $scope.computePalindromeUtil = function() {
      if($scope.lowerBound <= $scope.upperBound) {
        $scope.error = '';
        $scope.isError = false;
        $scope.isSuccess = true;
        var val = $scope.computePalindrome($scope.lowerBound, $scope.upperBound);
        if(val === Number.MIN_VALUE) {
          $scope.solution = 'No Values found.';
        }
        else {
          $scope.solution = 'The answer is: '+val;
        }
      }
      else {
        $scope.solution = '';
        $scope.isError = true;
        $scope.isSuccess = false;
        $scope.error = 'The value for lower bound should be less than or equal to upper bound value.';
      }

    };

    $scope.computePalindrome = function(a, b) {
      for(var i=b; i>=a; i--) {
        if($scope.isPalindrome(i.toString())) {
          return i;
        }
      }
      return Number.MIN_VALUE;
    };

    $scope.isPalindrome = function(str, i) {
      return (i=i||0)<0||i>=str.length/2||str[i]===str[str.length-1-i]&&$scope.isPalindrome(str,++i);
    };

    if($location.path().includes('main')) {
      var currentId = $location.path().substring(1, $location.path().length);
      var scanIDs = document.getElementsByClassName('nav')[0].children;
      for(var id in scanIDs) {
        if(id === currentId) {
          scanIDs[id].className = 'active';
        }
        if(id === 'about') {
          scanIDs[id].className = '';
        }
      }
    }

  });
