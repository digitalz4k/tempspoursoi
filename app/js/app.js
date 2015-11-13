'use strict';

angular.module('pfoApp', [
  'ngRoute',
  'ngAnimate',
  'ngResource',
  'mm.foundation'
  ])

.config(function ($routeProvider, $locationProvider, $httpProvider) {    
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      }).
      when('/public', {
        templateUrl: 'partials/public',
        controller: 'PublicCtrl'
      }).
      when('/formations', {
        templateUrl: 'partials/formations',
        controller: 'FormationsCtrl'
      }).
      when('/profil', {
        templateUrl: 'partials/profil',
        controller: 'ProfilCtrl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact',
        controller: 'ContactCtrl'
      }).
      otherwise({
        redirectTo:'/'
      });

    $locationProvider.html5Mode(true);

  });