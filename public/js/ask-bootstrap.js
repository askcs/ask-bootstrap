/*jslint node: true */
/*global angular */
'use strict';


/**
 * Declare app level module which depends on filters, and services
 */
angular.module('AskBootstrap',[
  // modals
  // controller
  'AskBootstrap.Controllers.Home',
  'AskBootstrap.Controllers.GetStarted',
  'AskBootstrap.Controllers.Scaffolding',
  'AskBootstrap.Controllers.BaseCss',
  'AskBootstrap.Controllers.Components',
  'AskBootstrap.Controllers.Javascript',
  // services
  // directives
  '$strap.directives'
  // filters
]);