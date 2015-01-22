define(['angularAMD', 'angularRoute'], 
  function (angularAMD) {

    var app = angular.module("app", ['ngRoute']);
    
    app.config(function ($routeProvider) {
      $routeProvider
      .when("/", angularAMD.route({
          controller: 'homeCtrl', 
          controllerUrl: 'components/home/homeCtrl',
          templateUrl: 'components/home/home.html'
      }))
      .otherwise({redirectTo: "/"});
    });
    return angularAMD.bootstrap(app);
});








