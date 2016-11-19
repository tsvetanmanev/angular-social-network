'use strict';

angular.module('socialNetwork.home',['ngRoute'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    
    .controller('HomeCtrl',['$scope', function($scope){
        $scope.hello = 'Zdrasti men!';
    }])