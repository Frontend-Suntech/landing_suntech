'use strict';

angular.
  module('landingApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
      when('/landing', {
        template: '<init-page></init-page>'
      }).
      otherwise('/landing');
    }
  ]);

angular.
  module('landingApp').
  config(['$locationProvider',
    function config($locationProvider) {
      $locationProvider.hashPrefix('');
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      });
    }
  ]);
