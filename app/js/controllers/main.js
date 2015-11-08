'use strict';

angular.module('pfoApp')
    .controller('MainCtrl', function ($scope, $timeout) {
        $scope.pageClass = "page-home";
        $scope.loaded = false;

        $timeout(function() { $scope.loaded = true; }, 5000);
    });