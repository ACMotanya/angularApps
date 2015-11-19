app.controller('FirebaseController', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
    var ref = new Firebase('https://blistering-inferno-8011.firebaseio.com/');
    $scope.items = $firebaseArray(ref);
  }
]);
