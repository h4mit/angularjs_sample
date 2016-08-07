var examApp = angular.module('examApp', [
  'ngRoute',
  'defualtControllers',
  'ngMaterial', 
  'ngMessages', 
  'material.svgAssetsCache'
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


examApp.controller('NavCtrl', ['$scope', '$location', function($scope,$location) {
       console.log(" Header controller " + $location.path());
   $scope.isActive = function(route) {
        return route === $location.path();
    };
}]);