'use strict';
angular.module('myApp')
    .controller('SearchController', ['$scope', 'WeatherService', function ($scope, WeatherService) {
        console.log("toto");
        $scope.city = ''; // La ville saisie par l'utilisateur

        $scope.searchWeather = function () {
            WeatherService.getWeather($scope.city).then(function (data) {
                $scope.weatherData = data; // Données de météo reçues
            });
        };
    }]);
