angular.module('feature.helloWorld')

    .controller('HelloWorldCtrl', function ($scope, gvmMessagesService, User, SampleService, navigationService) {

        angular.extend($scope, {
            usuario: User.getCurrent(),
            navigationService: navigationService
        });

        // SampleService.create().query({
        //     // parameter: value
        // }, function (data) {
        //     gvmMessagesService.info('Consulta com sucesso.');
        // }, function (data) {
        //     gvmMessagesService.info('Problemas ao efetuar a consulta.');
        // });
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