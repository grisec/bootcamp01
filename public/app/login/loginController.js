(function() {
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('loginController', loginController)

    loginController.$inject = ['$scope', '$rootScope', '$state', 'loginService'];

    function loginController($scope, $rootScope, $state, loginService) {

       $scope.loginUsuario = function(usuario_login) {
            var usuario = {
                email: usuario_login.email,
                clave: usuario_login.clave,
                gethash: true
            };
            loginService.loginUsuario(usuario)
            .then(function(res) {
                var identity = res.usuario;
                var token = res.token;
                if (token.length <= 0) {
                    alert("El token no se ha generado correctamente!");
                } else {
                    // Crear elementos en el localStorage
                    localStorage.setItem('identity', JSON.stringify(identity));
                    localStorage.setItem('token', token);
                    $rootScope.identity = identity;
                    $rootScope.token = token;
                    $state.go('home');
                }
            })
            .catch(function(err) {
                console.log(err);
            });

            // $scope.usuario = null; 
       };
    }
})();