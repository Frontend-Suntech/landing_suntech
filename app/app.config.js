'use strict';

angular.
  module('landingApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
      when('/', {
        template: '<init-page></init-page>'
      }).
      otherwise('/');
    }
  ]);

angular.
  module('landingApp').
  config(['$locationProvider',
    function config($locationProvider) {
      $locationProvider.hashPrefix('');
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: true,
        rewriteLinks: false
      });
    }
  ]);
