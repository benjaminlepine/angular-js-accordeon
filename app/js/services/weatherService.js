'use strict';
angular.module('myApp')
    .factory('WeatherService', ['$http', function ($http) {
        var service = {};

        service.getWeather = function (city) {
            var apiKey = '99cbc00efce0983cc9f3e4784c5ff507';
            var apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

            return $http.get(apiUrl, {
                params: {
                    q: city,
                    appid: apiKey,
                    units: 'metric'
                }
            }).then(function (response) {
                return response.data;
            });
        };
        return service;
    }]);