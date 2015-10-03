'use strict';

angular.module('pfoApp')
    .controller('PublicCtrl', function ($scope) {
        $scope.pageClass = "page-public";

        $scope.tabSelected = "#tab1";
        $scope.tabChange = function(e){
            if (e.target.nodeName === 'A') {
                $scope.tabSelected = e.target.getAttribute("href");
                e.preventDefault();
            }
        }
    });