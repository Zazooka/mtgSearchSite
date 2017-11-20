angular.module('mainPage', [])
    .config(function ($stateProvider) {
        $stateProvider.state('mainPage', {
            url: '/mainPage',
            templateUrl: 'public/mainPage.tpl.html',
            controller: 'mainPageController'
        })
    })
    .controller('mainPageController', function ($scope) {
        $scope.test = "HI there i am good at taiwaness";
    });