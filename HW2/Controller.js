app.controller("myCtrl", function ($scope) {
    $scope.value = '';
    $scope.result = '';

    $scope.change = function () {
        if (isNaN($scope.value)) {
            $scope.result = 'Hello ' + $scope.value;
        }
        else {
            $scope.result = $scope.value * 10;
        }
    };
});