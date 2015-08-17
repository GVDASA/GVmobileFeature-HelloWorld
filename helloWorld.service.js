angular.module('aluno.eventos')

.factory('Eventos', function($resource) {
    return {
        create: function() {
            return $resource("~/api/eventos", {}, {
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