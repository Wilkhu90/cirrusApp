'use strict';

/**
 * @ngdoc function
 * @name cirrusAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cirrusAppApp
 */
angular.module('cirrusAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.comp = false;
    $scope.pal = false;
    $scope.view = false;
    
    var elements = document.getElementsByClassName('nav')[0];
    if(elements) {
      var tabs = elements.children;
      for(var id in tabs) {
        if(id === 'main') {
          tabs[id].className = '';
        }
        if(id === 'about') {
          tabs[id].className = 'active';
        }
      }
    }

   });
