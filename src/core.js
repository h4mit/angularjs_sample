var examApp = angular.module('examApp', [
  'ngRoute',
  'defualtControllers'
]);


examApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/defualt/index.html',
        controller: 'DefualtIndexCtrl',
        activetab: 'home'
      }).
      when('/news', {
        templateUrl: 'views/defualt/news.html',
        controller: 'DefualtNewsCtrl',
        activetab: 'news'
      }).
      when('/news/:news_id', {
        templateUrl: 'views/defualt/detail.html',
        controller: 'DefualtDetailNewsCtrl',
        activetab: 'news'
      }).
      when('/about', {
        templateUrl: 'views/defualt/about.html',
        controller: 'DefualtAboutCtrl',
        activetab: 'about'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

