define(['app'], function (app) {
  app.controller('homeCtrl', function ($scope) {
    $scope.sites = [
      {'alias': 'photography',
       'url': 'http://cargocollective.com/airline'},
      {'alias': 'tumblr',
       'url': 'http://airlinehighway.tumblr.com/'},
      {'alias': 'youtube',
       'url': 'https://www.youtube.com/playlist?list=PLTHF5mLiW_UjklgeWMaL_SM-WVqe_CoDa'},
       {'alias': 'germancoast',
       'url': 'http://germancoast.verylongroad.com/'},
      {'alias': 'oldland',
       'url': 'http://oldland.verylongroad.com'}
    ];

    $scope.publications = [
      {'alias': 'photography',
       'url': 'http://cargocollective.com/airline'},
    ]

  });
});