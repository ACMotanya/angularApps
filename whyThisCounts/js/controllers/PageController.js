app.controller('PageController', ['$scope','$http', '$stateParams', function($scope, $http, $stateParams) {
  $http.get('data/pages.json').success(function(data) {
    $scope.page = data[$stateParams.id];
  });
}]);
