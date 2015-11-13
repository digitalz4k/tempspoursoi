'use strict';

angular.module('pfoApp')
    .controller('WrapperCtrl', function ($scope, $timeout) {
        $scope.loaded = false;
        $scope.prerender = "window.prerenderReady = true;";

        $timeout(function() { $scope.loaded = true; }, 10);
    });