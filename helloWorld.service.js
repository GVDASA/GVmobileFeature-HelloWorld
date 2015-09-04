angular.module('feature.helloWorld')

.factory('SampleService', function($resource) {
    return {
        create: function() {
            return $resource("~/api/sample", {}, {
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
