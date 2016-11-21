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

        //TODO: Add logic 2:25
    }])