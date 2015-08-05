app.controller('SinglePostController', ['$scope','$firebaseObject', '$stateParams', function($scope, $firebaseObject, $stateParams) {
  var ref = new Firebase('https://blistering-inferno-8011.firebaseio.com/' + $stateParams.id + '');
  $scope.post = $firebaseObject(ref);
  $scope.post.$loaded().then(console.log($scope.post));

  $scope.plusOneStory = function(index) {
    $scope.post.storyRating += 1;
  };
  $scope.minusOneStory = function(index) {
    $scope.post.storyRating -= 1;
  };
  $scope.plusOnePro = function(index) {
    $scope.post.proRating += 1;
  };
  $scope.minusOnePro = function(index) {
    $scope.post.proRating -= 1;
  };
  $scope.plusOneCon = function(index) {
    $scope.post.conRating += 1;
  };
  $scope.minusOneCon = function(index) {
    $scope.post.conRating -= 1;
  };
}]);
