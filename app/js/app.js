'use strict';

angular.module('pfoApp', [
  'ngCookies',
  'ngRoute',
  'ngAnimate',
  'ngMessages',
  'ngResource',
  'ngSanitize',
  'mm.foundation'
  ])

.config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      }).
      when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      }).
      when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      }).
      when('/settings', {
        templateUrl: 'partials/settings',
        controller: 'SettingsCtrl',
        authenticate: true
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

    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {

      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  })

  .run(function ($rootScope, $location) {
        $rootScope.getClass = function(path) {
            if ($location.path().substr(0, path.length) == path) {
              return "active"
            } else {
              return ""
            }
        }
  });