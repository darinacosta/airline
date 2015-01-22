define(['app'], function (app) {
  app.controller('homeCtrl', function ($scope, $http) {
    $http.get('assets/data/airline_sources.json').
    success(function(data, status, headers, config) {
      $scope.collections = data;
    }).
    error(function(data, status, headers, config) {
      console.log('Could not retrieve Airline sources.')
    });
  });
});