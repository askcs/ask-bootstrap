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
      templateUrl: 'dist/views/home.html',
      controller: 'home'
    })


    /**
     * Get started router
     */
    .when('/get_started',
    {
      templateUrl: 'dist/views/get_started.html',
      controller: 'getStarted'
    })


    /**
     * Scaffolding router
     */
    .when('/scaffolding',
    {
      templateUrl: 'dist/views/scaffolding.html',
      controller: 'scaffolding'
    })


    /**
     * Components router
     */
    .when('/components',
    {
      templateUrl: 'dist/views/components.html',
      controller: 'components'
    })


    /**
     * Base CSS router
     */
    .when('/base_css',
    {
      templateUrl: 'dist/views/base_css.html',
      controller: 'baseCss'
    })


    /**
     * Javascript router
     */
    .when('/javascript',
    {
      templateUrl: 'dist/views/javascript.html',
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