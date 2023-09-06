'use strict';
angular.module('myApp')
    .service('LogService', function () {
        this.logToto = function() {
            console.log("toto");
        };
    });
