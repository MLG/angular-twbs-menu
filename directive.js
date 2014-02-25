angular.module('mlgTWBSMenu', [])
  .directive('mlgTwbsMenu', function () {
    return {
      templateUrl: 'views/menu.html', // copy menu.html of this repository to your app/views/menu.html
      scope: {
        authPath: '@',
        initPath: '@',
        appName: '@'
      },
      controller: function ($scope, Auth) {
        $scope.init = function () {
          Auth.authenticate($scope.initPath, $scope.authPath);
        };
      }
    }
  });