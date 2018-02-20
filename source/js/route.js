app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/app/index.html',
            controller: 'StarterController',
            name: 'Início'
        })
        .when('/error', {
            templateUrl: 'app/views/error/index.html',
            name: 'Erro'
        })
        .otherwise({redirectTo: '/'});
});