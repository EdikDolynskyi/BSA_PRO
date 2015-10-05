app.controller("DisplayCtrl", function ($scope) {
    var vm = this;
    vm.content = null;

    $scope.$on('content:display', function(e, content) {
        vm.content = content;
    });
});