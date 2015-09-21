angular.module('feature.helloWorld')

    .controller('HelloWorldCtrl', function ($scope, gvmMessagesService, User, SampleService, navigationService) {

        angular.extend($scope, {
            usuario: User.getCurrent(),
            navigationService: navigationService
        });


        // Parametros que serão passados para a VIEW
        var params = {
                $filter:'codigopessoa eq '+$scope.usuario.codigoPessoa,          // Onde o copdigoPessoa for igual a 42
                // $filter:'CodigoPessoa gt 1 lt 42 ' // Onde o codigoPessoa for maior que 1 e menor que 42
                $orderby:'codigopessoa'               // Ordenado por codigoPessoa
                //$top: 10, // Dez registros por página
                //$skip: 10 // Indica quantos registros devem ser ignorados caso deseje utilizar paginação
                //$select: 'NOME, NACIONALIDADE, ESTADOCIVIL' // Indica quais campos serão retornados na consulta.

        }


        // Chamada do serviço que executa a VIEW
        SampleService.create().query(params, function (data) {
            console.log(data);
            gvmMessagesService.info('Consulta com sucesso.');
        }, function (data) {
            console.log(data);
            gvmMessagesService.info('Problemas ao efetuar a consulta.');
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