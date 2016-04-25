"use strict";
(function() {
    angular.module("peopleApp").controller("addPersonCtrl", addPersonCtrl);

    function addPersonCtrl($scope, peopleService, $location) {
        $scope.addPerson = function(person) {
            peopleService.addNew(person)
                .then(function(response) {
                    $location.path("/");
                });
        };
    }

    addPersonCtrl.$inject = ["$scope", "peopleService", "$location"];

}());