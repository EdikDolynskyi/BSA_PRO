var app = angular.module("myApp", []);

app.controller("mainCtrl", function() {
    var vm = this;

    vm.hobbies = ['soocer', 'music', 'video-games'];

    vm.addHobby = function(){
        if(vm.newHobby){
            vm.hobbies.push(vm.newHobby);
            vm.newHobby = '';
        }
    }
});