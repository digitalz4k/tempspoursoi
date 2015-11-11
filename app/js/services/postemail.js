'use strict';

angular.module('pfoApp')
    .factory('postEmailForm',['$http',function($http){
   return {
     postEmail: function(emailData,callback){
       $http.post('/postEmail/', emailData).success(callback);
        console.log(emailData);
     }
   }
}]);