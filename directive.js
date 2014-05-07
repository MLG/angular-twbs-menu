angular.module('mlgTWBSMenu', [])
  .directive('mlgTwbsMenu', function () {
    return {
      restrict:    'AE',
      transclude:  true,
      templateUrl: 'views/menu.html', // copy menu.html of this repository to your app/views/menu.html
      scope:       {
        authPath: '@',
        initPath: '@',
        appName:  '@'
      },
      controller:  function ($scope, Auth) {
        $scope.Auth = Auth;
        $scope.init = function () {
          Auth.authenticate($scope.initPath, $scope.authPath);
        };
      }
    }
  });