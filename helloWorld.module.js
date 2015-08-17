angular.module('helloWorld', [
    'core'
])

.config(function($stateProvider, MenuProvider) {
    $stateProvider.state('main.hello', {
        url: "/hello/:name",
        views: {
            'menuContent': {
                templateUrl: 'GVmobileFeature-HelloWorld/helloWorld-name.html',
                controller: "HelloWorldNameCtrl"
            }
        }
    });

    MenuProvider.addMenuItem({
        name: "Hello World",
        url: "/main/hello",
        icon: "ion-cube",
        module: "aluno",
		feature: "helloWorld",
        desktop: true,
        order: 1,
        cfg: {
            url: "/hello/",
            views: {
                'menuContent': {
                    templateUrl: 'GVmobileFeature-HelloWorld/helloWorld.html',
                    controller: "HelloWorldCtrl"
                }
            }
        }
    });
});
