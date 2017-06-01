'use strict';

/**
 * @ngdoc function
 * @name cirrusAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cirrusAppApp
 */
angular.module('cirrusAppApp')
  .controller('MainCtrl', function ($scope, $localStorage) {
    $scope.lowerBound = 0;
    $scope.upperBound = 0;
    $scope.solution = '';
    $scope.error = '';
    $scope.isError = false;
    $scope.isSuccess = false;
    $scope.allPalindromes = [];
    $scope.history = [];
    $scope.index = 0;

    //Checks for errors and then computes Palindrome accordingly.
    $scope.computePalindromeUtil = function() {
      if($scope.lowerBound <= $scope.upperBound && $scope.upperBound <= Number.MAX_VALUE) {
        var a = Math.ceil($scope.lowerBound);
        var b = Math.floor($scope.upperBound);
        $scope.error = '';
        $scope.isError = false;
        $scope.isSuccess = true;
        var val = $scope.computePalindrome(a, b);
        if(val === Number.MIN_VALUE) {
          $scope.solution = 'No Values found.';
        }
        else {
          $scope.solution = 'The Largest Palindrome is: '+val;
          console.log($scope.history);
          $scope.index++;
          if($scope.history.length < 10) {
            $scope.history.push({
              id: $scope.index,
              lowerbound: $scope.lowerBound,
              upperbound: $scope.upperBound,
              largestPalindrome: val
            });
          }
          else {
            $scope.history.shift();
            $scope.history.push({
              id: $scope.index,
              lowerbound: $scope.lowerBound,
              upperbound: $scope.upperBound,
              largestPalindrome: val
            });
          }
          $scope.postHistory($scope.history);
          $scope.allPalindromes = $scope.computeAllPalindromes(a, b);
        }
      }
      else {
        $scope.solution = '';
        $scope.isError = true;
        $scope.isSuccess = false;
        $scope.error = 'The value for lower bound should be less than or equal to upper bound value.';
        $scope.allPalindromes = [];
      }
    };
    //Compute the largest palindrome in range [a,b].
    $scope.computePalindrome = function(a, b) {
      for(var i=b; i>=a; i--) {
        if($scope.isPalindrome(i.toString())) {
          return i;
        }
      }
      return Number.MIN_VALUE;
    };
    //Compute all the palindromes in range [a,b].
    $scope.computeAllPalindromes = function(a, b) {
      var array = [];
      for(var i=b; i>=a; i--) {
        if($scope.isPalindrome(i.toString())) {
          array.push(i);
        }
      }
      return array;
    };
    //Check for a possible palindrome
    $scope.isPalindrome = function(str, i) {
      return (i=i||0)<0||i>=str.length/2||str[i]===str[str.length-1-i]&&$scope.isPalindrome(str,++i);
    };
    //Get history in local storage
    $scope.getHistory = function() {
      if($localStorage.history) {
        $scope.history = $localStorage.history;
        $scope.index = $localStorage.history[$localStorage.history.length-1].id;
      }
    };
    //Post history in local storage
    $scope.postHistory = function(data) {
      $localStorage.history = data;
    };
    //Initialization code.
    var elements = document.getElementsByClassName('nav')[0];
    if(elements) {
      var tabs = elements.children;
      for(var id in tabs) {
        if(id === 'main') {
          tabs[id].className = 'active';
        }
        if(id === 'about') {
          tabs[id].className = '';
        }
      }
    }
    $scope.getHistory();
  });
