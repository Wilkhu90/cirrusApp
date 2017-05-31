'use strict';

/**
 * @ngdoc function
 * @name cirrusAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cirrusAppApp
 */
angular.module('cirrusAppApp')
  .controller('AboutCtrl', function ($scope, $location) {
    

    if($location.path().includes('about')) {
      var currentId = $location.path().substring(1, $location.path().length);
      var scanIDs = document.getElementsByClassName('nav')[0].children;
      for(var id in scanIDs) {
        if(id === currentId) {
          scanIDs[id].className = 'active';
        }
        if(id === 'main') {
          scanIDs[id].className = '';
        }
      }
    }

   });
