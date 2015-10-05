app.controller("settingsCtrl", function() {
    var vm = this;

    vm.hobbies = [];

    vm.addHobby = function(){
        if(vm.newHobby){
            vm.hobbies.push(vm.newHobby);
            vm.newHobby = '';
        }
    }
});