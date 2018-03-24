(function () {
    'use strict';
    
    angular.module('gdgAdmin', ['ui.router', 'ui.bootstrap'])
    .constant("config", {
        "env":"dev",
        "serviceUrl":"http://localhost:3000/"
    });
})();