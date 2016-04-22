(function () {
    angular.module("peopleApp").controller("editPersonCtrl", editPersonCtrl);
    function editPersonCtrl($scope, peopleService, $stateParams, $location) {
        peopleService.getById($stateParams.personId).then(function (response) {
            $scope.person = {
                personId: response.d.ID,
                firstName: response.d.FirstName,
                lastName: response.d.LastName,
                address: response.d.Address
            };
            $scope.editPerson = function (person) {
                peopleService.update(person).then(function (response) {
                    $location.path("/");
                });
            };
        });
    }
    editPersonCtrl.$inject = ["$scope", "peopleService", "$stateParams", "$location"];
}());