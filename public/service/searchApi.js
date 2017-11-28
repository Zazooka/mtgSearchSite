angular.module('mtgSearchSite')
    .factory('cardService', ['$http', function($http) {
        var baseUrl = 'https://api.magicthegathering.io/';
        var cardService = {};

        cardService.getAllCards = function(param) {
            return $http({
                url: baseUrl + 'v1/cards',
                method: "GET",
                params: { 
                    supertypes: param.supertypes,
                    types: param.types,
                    colors: param.colors
                }
            });
        }

        cardService.getCard = function () {
            return $http.get()
        }
        return cardService;
    }]);