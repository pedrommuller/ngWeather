'use strict';

/**
 * @ngdoc overview
 * @name ngWeatherApp
 * @description
 * # ngWeatherApp
 *
 * Main module of the application.
 */
angular
  .module('ngWeatherApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'vsGoogleAutocomplete'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).constant('ppid', '8f72a2599dd7e488ef9d12633464c33a');
