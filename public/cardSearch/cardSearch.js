angular.module('mtgSearchSite')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('cardSearch', {
            url: '/home',
            templateUrl: 'cardSearch/cardSearch.tpl.html',
            controller: 'mainPageController'
        })
    }])
    .controller('mainPageController', ['$scope', 'cardService', function ($scope, cardService) {
        $scope.test = "HI there i am good at taiwaness";
        $scope.getStuff = function () {
            cardService.getAllCards({ supertypes: 'legendary', types: 'creature', colors: 'red,white' }).then(function (response) {
                $scope.test = response;
            });
        };
    }]);