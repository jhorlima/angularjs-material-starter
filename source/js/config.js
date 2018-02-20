app.config(function($mdThemingProvider, $mdIconProvider, $qProvider) {

    $mdThemingProvider
        .theme('default')
        .primaryPalette('indigo')
        .accentPalette('red')
        .warnPalette('deep-purple');

    $mdThemingProvider
        .theme('dark', 'default')
        .primaryPalette('indigo')
        .accentPalette('red')
        .warnPalette('deep-purple')
        .dark();

    $mdThemingProvider.enableBrowserColor({});
    $mdIconProvider.defaultIconSet('app/icons/mdi.svg');
    $qProvider.errorOnUnhandledRejections(false);

});