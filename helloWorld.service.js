angular.module('feature.helloWorld')

.factory('Sample', function($resource) {
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
