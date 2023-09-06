'use strict';
angular.module('myApp')
    .service('TimeService', function() {
    this.getCurrentTime = function() {
        return new Date();
    };
})
