angular.module('helloworld')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('hello', {
            url: '/hello',
            templateUrl: 'cardSearch/cardSearch.tpl.html',
            controller: 'mainPageController'
        })
    }])
    .controller('mainPageController', function ($scope) {
        $scope.test = "HI there i am good at taiwaness";
    });