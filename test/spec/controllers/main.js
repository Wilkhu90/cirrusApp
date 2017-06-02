'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cirrusAppApp'));

  var $controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.solution', function() {
    it('should compute largest palindrome between 0 and 0 as 0', function() {
      var $scope = {};
      $controller('MainCtrl', { $scope: $scope });
      $scope.lowerBound = 0;
      $scope.upperBound = 0;
      $scope.computePalindromeUtil();
      expect($scope.solution).toEqual('The Largest Palindrome is: 0');
    });
    it('should compute largest palindrome between 0 and 1 as 1', function() {
      var $scope = {};
      $controller('MainCtrl', { $scope: $scope });
      $scope.lowerBound = 0;
      $scope.upperBound = 1;
      $scope.computePalindromeUtil();
      expect($scope.solution).toEqual('The Largest Palindrome is: 1');
    });
    it('should compute largest palindrome between 0 and 100 as 99', function() {
      var $scope = {};
      $controller('MainCtrl', { $scope: $scope });
      $scope.lowerBound = 0;
      $scope.upperBound = 100;
      $scope.computePalindromeUtil();
      expect($scope.solution).toEqual('The Largest Palindrome is: 99');
    });
    it('should compute largest palindrome between -1 and -1 as Not defined', function() {
      var $scope = {};
      $controller('MainCtrl', { $scope: $scope });
      $scope.lowerBound = -1;
      $scope.upperBound = -1;
      $scope.computePalindromeUtil();
      expect($scope.solution).toEqual('No Values found.');
    });
    it('should compute largest palindrome between 10 and 1 as nothing', function() {
      var $scope = {};
      $controller('MainCtrl', { $scope: $scope });
      $scope.lowerBound = 10;
      $scope.upperBound = 1;
      $scope.computePalindromeUtil();
      expect($scope.solution).toEqual('');
    });
    it('should compute largest palindrome between 100.20 and 102.20 as 101', function() {
      var $scope = {};
      $controller('MainCtrl', { $scope: $scope });
      $scope.lowerBound = 100.20;
      $scope.upperBound = 102.20;
      $scope.computePalindromeUtil();
      expect($scope.solution).toEqual('The Largest Palindrome is: 101');
    });
    it('should compute largest palindrome between 101.20 and 102.20 as Not defined', function() {
      var $scope = {};
      $controller('MainCtrl', { $scope: $scope });
      $scope.lowerBound = 101.20;
      $scope.upperBound = 102.20;
      $scope.computePalindromeUtil();
      expect($scope.solution).toEqual('No Values found.');
    });
    it('should compute largest palindrome between abc and def as Not defined', function() {
      var $scope = {};
      $controller('MainCtrl', { $scope: $scope });
      $scope.lowerBound = 'abc';
      $scope.upperBound = 'def';
      $scope.computePalindromeUtil();
      expect($scope.solution).toEqual('');
    });

  });

});
