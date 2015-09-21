angular.module('feature.helloWorld')

.factory('SampleService', function($resource) {
    return {
        create: function() {
            return $resource("~/api/views/pessoa/?$orderby=nome", {}, {
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
