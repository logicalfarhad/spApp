"use strict";
(function () {
    angular.module("peopleApp").controller("allPeopleCtrl", allPeopleCtrl);
    function allPeopleCtrl($scope, peopleService) {

        $scope.people = [];
        load();
        function load() {
            var promiseGet = peopleService.getAll();
            promiseGet.then(function (data) {
                $scope.people = data.d.results;
            });
        }
        $scope.removePerson = function (item) {
            peopleService.remove(item.Id);
            var index = $scope.people.indexOf(item.Id);
            $scope.people.splice(index, 1);
        }
    }
    allPeopleCtrl.$inject = ["$scope", "peopleService"];
})();