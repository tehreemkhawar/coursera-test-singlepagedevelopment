(function() {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope) {
  $scope.lunchmenu= " ";
  $scope.fooditems = 0;
  $scope.message = "";
  $scope.color="green";

  console.log(LunchCheckController);

  $scope.items = function() {
    var t_items = $scope.lunchmenu.toString();
    var total_items = t_items.trim();
    $scope.fooditems= total_items.split(",").length;
  //return t_items;
    if ($scope.fooditems > 3) {
      $scope.message = "Too Much";
      $scope.color="red";
      }
    else if ($scope.fooditems < 4) {
      $scope.message="Enjoy!";
    }
  }



}
})();
