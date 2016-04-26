(function () {
    angular.module("peopleApp").controller("editListCtrl", editListCtrl);

    function editListCtrl($scope, peopleService) {
        peopleService.getListNames().then(function (data) {
            $scope.listNames = data.d.results;
        }, function () {

        });
        $scope.update = function () {
            var listName = $scope.selectedItem;
            peopleService.getListItemsbyListName(listName).then(function (items) {
                $scope.data = items.d.results;
                peopleService.getListOwnerbyListName(listName).then(function (data) {
                    $scope.owner = data.d.Title;
                }, function () {

                });

            }, function () {

            });
        }
        $scope.works = function () {
            alert("it works!");
        }
    }

    editListCtrl.$inject = ["$scope", "peopleService"];
}())