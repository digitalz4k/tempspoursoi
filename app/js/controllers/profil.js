'use strict';

angular.module('pfoApp')
    .controller('ProfilCtrl', function ($scope) {
        $scope.brand = "Mon parcours";

        $scope.tabSelected = "#tab1";
        $scope.tabChange = function(e){
            if (e.target.nodeName === 'A') {
                $scope.tabSelected = e.target.getAttribute("href");
                e.preventDefault();
            }
        }
    });