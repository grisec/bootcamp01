(function() {
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('loginController', loginController)

    loginController.$inject = ['$scope', '$rootScope', '$state', 'loginService'];

    function loginController($scope, $rootScope, $state, loginService) {

        $rootScope.titulo1 = 'Login';
        $rootScope.titulo2 = 'Por favor acceda al sistema mediante una de las opciones';

       $scope.loginUsuario = function(usuario) {
            loginService.loginUsuario(usuario)
            .then(function(usuario) {
                
                if (!usuario) {
                    alert("No coinciden los datos con ningún usuario registrado");
                } else {
                    $rootScope.usuario = usuario;
                    $rootScope.titulo1 = null;
                    $rootScope.titulo2 = null;
                    $state.go('home');
                }
            })
            .catch(function(err) {
                console.log(err);
            });

            // $scope.usuario = null; 
       };
       $scope.loginConGitHub = function(usuario) {
            loginService.loginConGitHub(usuario)
            .then(function(usuario) {
                    $rootScope.usuario = usuario;
                    $rootScope.titulo1 = null;
                    $rootScope.titulo2 = null;
                    //$state.go('home');
            })
            .catch(function(err) {
                console.log(err);
            });

            // $scope.usuario = null; 
        };
       /*$scope.uploadFiles = function(file, errFiles) {
           console.log(file);
           
            $scope.f = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: '/',
                    data: {file: file}
                });

                file.upload.then(function (response) {
                    $timeout(function () {
                        file.result = response.data;
                    });
                }, function (response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 * 
                                            evt.loaded / evt.total));
                });
            }   
        };*/
    }
})();