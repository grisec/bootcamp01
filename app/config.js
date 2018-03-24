// Config AngularJS states
(function(){
    'use strict';
    angular
      .module('gdgAdmin')
      .config(routeConfig)
  
    routeConfig.$inject = ['$stateProvider','$urlRouterProvider']; //parametros de ui-boostrap
  
    function routeConfig($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/registrarPremios');
  
      $stateProvider
      .state('home',
        {url: '/home', templateUrl: 'home.html', controller: 'homeController'}
      )
      .state('registrarPremios',
        {url: '/registrarPremios', templateUrl: 'registrarPremios.html', controller: 'registrarPremiosController'}
      )
      .state('registrarPremios-form',
        {url: '/registrarPremios-form', templateUrl: 'registrarPremios-form.html', controller: 'registrarPremiosFormController'}
      )
      .state('registrarPremios-edit',
        {url: '/registrarPremios-edit/:id', templateUrl: 'registrarPremios-form.html', controller: 'registrarPremiosFormEditController'}
      )
    }
 }());
  