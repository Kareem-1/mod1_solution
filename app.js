(function () {
  var app = angular
    .module("LunchCheck", [])
    .controller("LaunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.msg = "";
    $scope.color = "";
    $scope.borderStyle = "";
    $scope.doFunction = function () {
        //I do not consider empty items
      var array = $scope.items.split(',');
      var number = 0;
      array.map((item)=>{
        if(item != ""){
            number++;
        }
      })
      $scope.borderStyle = `1px solid `;
      if(number == 0){
        $scope.msg = "Please enter data first";
        $scope.color = "red";
      } else if(number > 3){
        $scope.msg = "Too much!";
        $scope.color = "green";
      }else{
        $scope.msg = "Enjoy!";
        $scope.color = "green";
      }
    };
  }
})();
