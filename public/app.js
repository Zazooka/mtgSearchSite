var myApp = angular.module('mtgSearchSite', ['ui.router']);

myApp.config(['$stateProvider', function ($stateProvider) {
  // var helloState = {
  //   name: 'hello',
  //   url: '/hello',
  //   templateUrl: '/cardSearch/cardSearch.tpl.html'
  // }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  // $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
}])
  .controller('helloWorldController', ['$scope', '$state', function ($scope, $state) {
    $scope.greeting = 'Hola';
    $scope.goThere = function() {
      $state.go('cardSearch');
    };
  }]);;