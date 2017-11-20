var routerApp = angular.module('helloWorld', ['ui.router']);

routerApp.config(['$stateProvider', function($stateProvider) {
    var test = {
        name: 'hello',
        url: '/hello',
        template: '<h3>Hello world</h3>'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    $stateProvider.state(test);
    $stateProvider.state(aboutState);
}])
.controller('helloWorldController', ['$scope', '$state', function($scope, $state) {
    $scope.greeting = 'Hola';
    $scope.goThere = function() {
        $state.go('mainPage');
    }
}]);