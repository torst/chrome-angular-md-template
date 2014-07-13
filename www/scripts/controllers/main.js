'use strict';

angular.module('genericChromeMdApp')
  .controller('MainCtrl', function ($scope, $timeout, $materialSidenav, $materialToast, $animate) {
    $scope.toggleMenu = function() {
      $timeout(function() {
        $materialSidenav('left').toggle();
      });
    };

    $scope.toastPosition = {
      bottom: true,
      top: false,
      left: true,
      right: false,
      fit: false
    };

    $scope.getToastPosition = function() {
      return Object.keys($scope.toastPosition)
        .filter(function(pos) { return $scope.toastPosition[pos]; })
        .join(' ');
    };

    $scope.toastIt = function() {
      $materialToast({
        template: 'Hello, ' + Math.random(),
        duration: 2000,
        position: $scope.getToastPosition()
      });
    };
  })
  .controller('LeftCtrl', function($scope, $timeout, $materialSidenav) {
    var nav;
    $timeout(function() {
      nav = $materialSidenav('left');
    });
    $scope.close = function() {
      nav.close();
    };
  })
  .controller('ToastCtrl', function($scope, $hideToast) {
    $scope.closeToast = function() {
      $hideToast();
    };
  })
  ;