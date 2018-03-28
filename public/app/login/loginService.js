(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .service('loginService', loginService)

    loginService.$inject = ['$http', 'config'];

    function loginService($http, config) {
        this.loginUsuario        = loginUsuario;
        // this.logoutUsuario        = logoutUsuario;
        this.loginConGitHub = loginConGitHub;

        function loginUsuario(usuario) {
            return $http.post(config.serviceUrl + 'login', usuario)
            .then(function(result) {
                return result.data;
            })
            .catch(function(err) {
                console.log(err);
            });
        }

        function loginConGitHub() {
            return $http.get(config.serviceUrl + 'usuario/github/callback')
            .then(function(result) {
                console.log("res: "+result.user);
                
                return result.data;
            })
            .catch(function(err) {
                console.log(err);
            });
        }
    }
})();