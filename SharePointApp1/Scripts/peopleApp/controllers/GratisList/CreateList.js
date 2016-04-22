"use strict";
(function () {
    angular.module("peopleApp")
		.controller("CreateListCtrl", ["$scope", "peopleService", "$location", function ($scope, peopleService, $location) {
		    $scope.createList = function (newListName) {
		        peopleService.addNewList(newListName)
                .then(function (response) {
                    $location.path("/");
                });

		    };
		}]);
})();