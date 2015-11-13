'use strict';

angular.module('pfoApp')
    .controller('wrapperCtrl', function ($rootScope) {
    
        $rootScope.seo = {
            pageTitle : 'Un temps pour Soi - Laura Schmit, psycho socio esthéticienne - Bouches du Rhône',
            pageDescription: 'Psycho socio esthéticienne dans les Bouches du Rhône, Laura Schmit accompagne les personnes dans leur réappropriation psycho-corporelle.',
            siteAuthor: 'Laura Schmit'            
        };
    
    });