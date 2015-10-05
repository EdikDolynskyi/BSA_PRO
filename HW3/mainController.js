app.controller("MainCtrl", function ($rootScope, $timeout) {
    var vm = this;

    vm.friends = ['Petro', 'Ivan', 'Vasul'];

    vm.currentIndex = 0;
    $timeout(function () {
        getFriendByIndexAndDisplay(vm.currentIndex)
    }, 200);

    vm.buttonBackPress = function () {
        vm.currentIndex > 0 ? vm.currentIndex-- : 0;
        getFriendByIndexAndDisplay(vm.currentIndex);
    };

    vm.buttonForwardPress = function () {
        vm.currentIndex < vm.friends.length - 1 ? vm.currentIndex++ : 0;
        getFriendByIndexAndDisplay(vm.currentIndex);
    };

    vm.buttonRewindPress = function () {
        vm.currentIndex = 0;
        getFriendByIndexAndDisplay(vm.currentIndex);
    };

    vm.buttonFastforwardPress = function () {
        vm.currentIndex = vm.friends.length - 1;
        getFriendByIndexAndDisplay(vm.currentIndex);
    };

    vm.addFriend = function () {
        if(!vm.friends.length)
            vm.currentIndex = 0;

        if (vm.newFriend) {
            vm.friends.push(vm.newFriend);
            vm.newFriend = '';
        }
        getFriendByIndexAndDisplay(vm.currentIndex);
    };
    vm.deleteFriend = function(index){
        vm.friends.splice(index, 1);
        if(vm.currentIndex >= vm.friends.length-1)
            vm.currentIndex = vm.friends.length-1;
        getFriendByIndexAndDisplay(vm.currentIndex);
    };

    function getFriendByIndexAndDisplay(index) {
        var friend = '';
        if (vm.friends.length)
            friend = vm.friends[index];

        $rootScope.$broadcast('content:display', friend);
    }
});