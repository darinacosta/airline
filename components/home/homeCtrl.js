define(['app'], function (app) {
  app.controller('homeCtrl', function ($scope, $http) {
    $http.get('assets/data/airline.json').
    success(function(data, status, headers, config) {
      console.log(data);
      $scope.about = data.about;
      $scope.collections = data.sources;
      $scope.contact = data.contact;
    }).
    error(function(data, status, headers, config) {
      console.log('Could not retrieve Airline sources.')
    });
  });
});