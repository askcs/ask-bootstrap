/*jslint node: true */
/*global angular */
'use strict';


/**
 * Providers & Routes
 */
angular.module('AskBootstrap')
.config(
[
  '$locationProvider', '$routeProvider', '$httpProvider',
  function ($locationProvider, $routeProvider, $httpProvider)
  {
    /**
     * Home router
     */
    $routeProvider
    .when('/home',
    {
      templateUrl: 'js/views/home.html',
      controller: 'home'
    })


    /**
     * Get started router
     */
    .when('/get_started',
    {
      templateUrl: 'js/views/get_started.html',
      controller: 'getStarted'
    })


    /**
     * Scaffolding router
     */
    .when('/scaffolding',
    {
      templateUrl: 'js/views/scaffolding.html',
      controller: 'scaffolding'
    })


    /**
     * Components router
     */
    .when('/components',
    {
      templateUrl: 'js/views/components.html',
      controller: 'components'
    })


    /**
     * Base CSS router
     */
    .when('/base_css',
    {
      templateUrl: 'js/views/base_css.html',
      controller: 'baseCss'
    })


    /**
     * Javascript router
     */
    .when('/javascript',
    {
      templateUrl: 'js/views/javascript.html',
      controller: 'javascript'
    })


    /**
     * Router fallback
     */
    .otherwise({
      redirectTo: '/home'
    });
  }
]);