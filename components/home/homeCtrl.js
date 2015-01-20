define(['app'], function (app) {
  app.controller('homeCtrl', function ($scope) {
    $scope.collections = 
    [{
      'alias': 'Applications',
      'resources': [
        {'alias': 'The German Coast',
         'url': 'http://germancoast.verylongroad.com/',
         'description': 'Interactive map that explores the industrial landscapes of Louisiana\'s German Coast region.'},
        {'alias': 'Old Land',
         'url': 'http://oldland.verylongroad.com',
         'description': 'An application that allows users to explore two 19th century map overlays of South Louisiana.'}
      ]
    },

   {
    'alias': 'Images',
    'resources': [
      {'alias': 'Cargo Collective',
       'url': 'http://cargocollective.com/airline',
       'description': 'Photographic collections of various South Louisiana ecosystems and industrial environments.'},
      {'alias': 'Tumblr',
       'url': 'http://airlinehighway.tumblr.com/',
       'description': 'Periodically updated blog.'}
    ]
  },

  {
    'alias': 'Film & Audio',
    'resources': [
      {'alias': 'The West Indian Hurricane',
       'url': 'https://www.youtube.com/watch?v=hERXpPDzFwg',
       'description': 'Longtime St. John Parish resident Donald Tregre discusses the parallels between the West Indian Hurricane (1915) and Hurricane Isaac (2012). Most footage was filmed in the parishes of St. John, St. Charles, and Plaquemines at or near the time of Hurricane Isaac.'},
      {'alias': 'The Norco Shell Explosion of 1988',
       'url': 'https://www.youtube.com/watch?v=wsWbq2-g2is',
       'description': 'A meditation on the impacts of the 1988 Shell Explosion in Norco, Louisiana,  and the industrialized landscape that remains.'}
    ]
  },
  
  {
    'alias': 'Written',
    'resources': [
      {'alias': 'Proposed RAM Coal Terminal',
       'Publication': 'The American Guide',
       'url': 'http://theamericanguide.org/project/proposed-ram-coal-terminal/',
       'description': 'A look at the proposed RAM Coal Terminal in Ironton, Louisiana and its expected impacts on the local community.'},
      {'alias': 'Norco, Louisiana',
       'Publication': 'The American Guide',
       'url': 'http://blog.theamericanguide.org/post/55177477695/norco-louisiana-shell-oil-erected-their-catalytic',
       'description': 'A meditation on the impacts of the 1988 Shell Explosion in Norco, Louisiana,  and the industrialized landscape that remains.'}
    ]
  }
  ];

  });
});