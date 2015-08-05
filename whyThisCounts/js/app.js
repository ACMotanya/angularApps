var app = angular.module("WhyThisCounts", ['ui.router', 'firebase']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/views/post.html',
      controller: 'FirebaseController'
    });
    $stateProvider
      .state('post', {
        url: '/post/{id}',
        templateUrl: 'views/singlepost.html',
        controller: 'SinglePostController'
      });
      $stateProvider
        .state('page', {
          url: '/page/{id}',
          templateUrl: 'views/page.html',
          controller: 'PageController'
        });
    $urlRouterProvider.otherwise('home');
  }]);
