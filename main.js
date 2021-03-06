require.config({
    baseUrl: "",    
    paths: {
        'angular': 'node_modules/angular/angular',
        'angularAMD': '//cdn.jsdelivr.net/angular.amd/0.2.0/angularAMD.min',
        'angularRoute': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min'
    },
    shim: { 
      'angularAMD': ['angular'],
      'angularRoute': ['angular']
    },
    deps: ['app']
});