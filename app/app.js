'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
    .directive('accordion', function() {
      return {
        restrict: 'E',
        transclude: true,
        template: '<div ng-transclude></div>',
        controller: function() {
          let expanders = [];
          this.gotOpened = function(selectedExpander) {
            angular.forEach(expanders, function(expander) {
              if (selectedExpander !== expander) {
                expander.showMe = false;
              }
            });
          };
          this.addExpander = function(expander) {
            expanders.push(expander);
          };
        }
      };
    })
    .directive('accordionHeader', function() {
      return {
        restrict: 'E',
        transclude: true,
        template: '<div class="accordion-header-content" ng-click="toggle()" ng-transclude></div>',
        require: '^accordion',
        link: function(scope, element, attrs, accordionController) {
          scope.toggle = function() {
            scope.showMe = !scope.showMe;
            accordionController.gotOpened(scope);
          };
          accordionController.addExpander(scope);
        }
      };
    })
    .directive('accordionBody', function() {
      return {
        restrict: 'E',
        transclude: true,
        template: '<div class="accordion-body-content" ng-show="showMe" ng-transclude></div>',
        require: '^accordion',
        link: function(scope, element, attrs, accordionController) {
          accordionController.addExpander(scope);
        }
      };
    })



