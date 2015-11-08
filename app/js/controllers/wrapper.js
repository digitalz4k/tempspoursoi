'use strict';

angular.module('pfoApp')
    .controller('WrapperCtrl', function ($scope, $timeout) {
        $scope.loaded = false;

        $timeout(function() { $scope.loaded = true; }, 5000);
    });