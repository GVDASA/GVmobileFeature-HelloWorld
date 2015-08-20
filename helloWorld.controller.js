angular.module('feature.helloWorld')

    .controller('HelloWorldCtrl', function ($scope, gvmMessagesService, User, navigationService) {

        angular.extend($scope, {
            usuario: User.getCurrent(),
            navigationService: navigationService
        });

    })

    .controller('HelloWorld2Ctrl', function ($scope, $stateParams, User, gvmMessagesService, navigationService) {

        angular.extend($scope, {
            navigationService: navigationService
        });

        var usuario = User.getCurrent();

        $scope.alunos = usuario.alunos.filter(function (aluno) {
            return aluno.id == $stateParams.id;
        });

    });