var app = angular.module('AppStarter', [
    'ui.utils.masks',
    'idf.br-filters',
    'angular.filter',
    'angularMoment',
    'ngMaterial',
    'ngMessages',
    'Barbara-Js',
    'ngRoute'
]);

app.info({version: '1.0.0'});

app.run(function($rootScope, $mdSidenav, $location, NotificacoesService, bootstrap, amMoment) {

    amMoment.changeLocale('pt-br');

    $rootScope.loading = bootstrap.loading();

    $rootScope.alert = {
        responseSuccess: function (message) {
            NotificacoesService.notificacaoSucesso(message);
        },
        responseError: function (meta) {
            if (angular.isDefined(meta.message) && angular.isString(meta.message)) {
                NotificacoesService.notificacaoErro(meta.message);
            } else if (angular.isDefined(meta.message) && angular.isArray(meta.message)) {
                NotificacoesService.notificacaoErro(meta.message.join(". "));
            } else if (angular.isDefined(meta) && angular.isString(meta)) {
                NotificacoesService.notificacaoErro(meta);
            } else {
                NotificacoesService.notificacaoErro("Ocorreu um erro na requisição!");
            }
        }
    };

    $rootScope.goTo = function (path) {
        $location.path(path);
    };

    $rootScope.$on('$routeChangeStart', function ($event, next) {
        $rootScope.loading.onLoading('Carregando ' + (next['$$route'] ? next['$$route']['name'] : '') + ' ...');
    });

    $rootScope.$on('$routeChangeSuccess', function ($event, current, previous) {
        $rootScope.previous = previous ? previous['$$route'] : undefined;
        $rootScope.current  = current['$$route'];
        $rootScope.loading.loaded();
    });

    $rootScope.$on('$routeChangeError', function ($event, current, previous, rejection) {
        $rootScope.previous = current ? current['$$route'] : undefined;
        NotificacoesService.notificacaoErro(rejection);
        $rootScope.loading.loaded();
        $rootScope.error = {
            rejection: rejection,
            previous: previous,
            current: current,
            $event: $event
        };
        $rootScope.goTo("/error");
    });

    $rootScope.sideNav = function () {
        $mdSidenav('menu').toggle();
    };

});