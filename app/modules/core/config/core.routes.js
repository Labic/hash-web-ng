(function () {
  'use strict';
  angular
    .module('hash.core')
    .config(function ($stateProvider, $urlRouterProvider) {
<<<<<<< HEAD
    $stateProvider
    // .state('app', {
    //   abstract: true,
    //   url: '/app',
    //   templateUrl: 'modules/core/views/app.html',
    //   controller: 'MainCtrl'
    // })
//      .state('home', {
//      url: '',
//      templateUrl: 'modules/core/views/app.html',
//    });
    // .state('router', {
    //   url: '/router',
    //   template: '<div class="lockscreen" style="height: 100%"></div>',
    //   controller: 'RouteCtrl'
    // })
    // .state('error', {
    //   url: '/error',
    //   template: '<div class="text-center alert alert-danger" style="margin: 100px">An error occurred.</div>'
    // });
//    $urlRouterProvider.when('/#', '/painel');
          $urlRouterProvider.otherwise('/twitter');
    //    $urlRouterProvider.otherwise(redirectTo: '/twitter');
    //    $location.path( "/twitter" );
  });

=======
        $urlRouterProvider.otherwise('/twitter');
    });
>>>>>>> 779b9b87b35d4b54b5d3227de198f7e55afe3136
})();
