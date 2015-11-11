'use strict';

angular.module('pfoApp')
    .controller('ContactCtrl', function ($scope, $http) {
        $scope.pageClass = "page-contact";
    
        $scope.emailData = {};
        $scope.button = "Envoyer";
        $scope.confirm = "Le message a bien été envoyé !";
        $scope.loading = "Veuillez patienter...";
    
    $scope.postEmail = function(isValid){
        
        var emailData = ({
            name: $scope.fname,
            entreprise: $scope.fentreprise,
            email: $scope.femail,
            phone: $scope.fphone,
            message: $scope.fmessage
        });
        
        if (isValid) {
            console.log(emailData);
            $scope.button = $scope.loading;
            $http.post('/postEmail/', emailData)
                .success(function(data, status, headers, config){
                    console.log("Contact form : The message has been sent.");
                    var confirm = $scope.confirm;
                    $scope.button = confirm;
                })
                .error(function(data, status, headers, config){
                    console.log("Contact form : An error occurred. The message has not been sent.");
            })  
        };
        
    };
    
    
    });