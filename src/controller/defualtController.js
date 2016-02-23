var defualtControllers = angular.module('defualtControllers', []);



defualtControllers.controller('DefualtIndexCtrl', ['$scope', function($scope) {
     // code here
     console.log("Index Controller running ... ");
}]);

defualtControllers.controller('DefualtAboutCtrl', ['$scope', function($scope) {
     // code here
     console.log("About Controller running ... ");
}]);

defualtControllers.controller('DefualtNewsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/news.json').success(function(data) {
      $scope.news = data;
    });    
    console.log("News Controller running ... ");
  }]);


defualtControllers.controller('DefualtDetailNewsCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
      console.log("Detail News Controller running ... ");
      $scope.id = $routeParams.news_id;
    }]);