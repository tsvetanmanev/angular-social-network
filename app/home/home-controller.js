'use strict';

angular.module('socialNetwork.home',['ngRoute'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    
    .controller('HomeCtrl',['$scope', function($scope){
        $scope.login = function (user) {
            console.log(user);
        };

        $scope.register = function (user) {
            console.log(user);
        };

        //TODO: Continue with authentication.js 2:30
    }])