'use strict';

angular.module('socialNetwork.home',['ngRoute','socialNetwork.users.authentication'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    
    .controller('HomeCtrl',['$scope', "authentication", function($scope, authentication){
        $scope.login = function (user) {
            authentication.loginUser(user);
        };

        $scope.register = function (user) {
            authentication.registerUser(user);
        };

        //TODO: Continue with authentication.js 2:30
    }])