'use strict';

// Declare app level module which depends on views, and components
angular.module('socialNetwork', [
  'ngRoute',
  'socialNetwork.home'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);
