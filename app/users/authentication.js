'use strict';

angular.module('socialNetwork.users.authentication',[])
    .factory('authentication', ['$http', '$q', 'BASE_URL', function($http, $q, BASE_URL){
        
        function registerUser(user){
            var deffered = $q.defer();

            $http.post('', user)
                .then(function(){

                }, function(){

                });

            return deffered.promise;
        }
        
        //TODO: Continue with authentication.js 2:30

        function loginUser(user){
            var deffered = $q.defer();

            return deffered.promise;
        }

        function logout(){

        }

        return {
            registerUser: registerUser,
            loginUser: loginUser,
            logout: logout
        }
    }])