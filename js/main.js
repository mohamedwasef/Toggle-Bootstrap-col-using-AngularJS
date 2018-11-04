var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.records = [
    "First item",
    "Second item",
    "Third item",
    "Fourth item",
    "Fiveth item",
  ]
});