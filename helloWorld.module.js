angular.module('feature.helloWorld', [
    'core'
])

.config(function($stateProvider, MenuProvider) {
    $stateProvider.state('main.helloName', {
        url: "/hello/:id",
        views: {
            'menuContent': {
                templateUrl: 'feature.helloWorld/helloWorld2.html',
                controller: "HelloWorld2Ctrl"
            }
        }
    });

    MenuProvider.addMenuItem({
        name: "Hello World",
        url: "/main/hello",
        icon: "ion-cube",
        module: "aluno",
		feature: "feature.helloWorld",
        desktop: true,
        order: 1,
        cfg: {
            url: "/hello",
            views: {
                'menuContent': {
                    templateUrl: 'feature.helloWorld/helloWorld.html',
                    controller: "HelloWorldCtrl"
                }
            }
        }
    });
});
