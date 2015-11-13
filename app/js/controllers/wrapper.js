'use strict';

angular.module('pfoApp')
    .controller('WrapperCtrl', function ($scope) {
        $scope.prerender = "window.prerender = false;";
    });