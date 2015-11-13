'use strict';

angular.module('pfoApp')
    .controller('MainCtrl', function ($scope) {
        $scope.pageClass = "page-home";
        
        $scope.prerender = "window.prerenderReady = true;";
    });