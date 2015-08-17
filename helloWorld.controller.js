angular.module('helloWorld')

.controller('HelloWorldCtrl', function($scope, gvmMessagesService, navigationService) {

    angular.extend($scope, {
        name: "",
        goToName: function(name) {
            navigationService.go('/main/hello/' + name);
        }
    });

})

.controller('HelloWorldNameCtrl', function($scope, $stateParams, User, gvmMessagesService, navigationService) {
    
    angular.extend($scope, {
        user: User.getUserData,
        name: $stateParams.name,
        navigationService: navigationService
    });
    
});