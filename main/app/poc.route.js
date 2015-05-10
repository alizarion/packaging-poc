angular.module('packaging-poc')

    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    'url': "/app",
    'abstract': true,
    'templateUrl': "app/components/template/templateView.html",
    'controller': 'templateCtrl'
  })

  .state('app.search', {
    'url': "/search",
    'views': {
      'menuContent': {
        'templateUrl': "app/components/search/searchView.html"
      }
    }
  })

  .state('app.browse', {
    'url': "/browse",
    'views': {
      'menuContent': {
        'templateUrl': "app/components/browse/browseView.html"
      }
    }
  })
    .state('app.playlists', {
      'url': "/playlists",
      'views': {
        'menuContent': {
          'templateUrl': "app/components/playlist/playlistsView.html",
          'controller': 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    'url': "/playlists/:playlistId",
    'views': {
      'menuContent': {
        'templateUrl' : "app/components/playlist/playlistView.html",
        'controller': 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
}]);
