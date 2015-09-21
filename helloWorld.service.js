angular.module('feature.helloWorld')


/* O SampleService está realizando a chamada para a view -- GVMVW_PESSOA
   Caso queira excecutar outra view por exemplo -- GVMVWM_EXEMPLO a url passada para API deverá ser: "~/api/views/exemplo/"
*/

.factory('SampleService', function($resource) {
    return {
        create: function() {
            return $resource("~/api/views/pessoa/", {}, {
                "update": {
                    method: "PUT"
                },
                'query': {
                    method: 'GET',
                    isArray: false,
                    cache: false
                }
            });
        }
    };
});
