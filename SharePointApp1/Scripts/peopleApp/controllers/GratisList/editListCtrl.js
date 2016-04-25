(function () {
    angular.module("peopleApp").controller("editListCtrl", editListCtrl);

    function editListCtrl($scope, peopleService) {
        peopleService.getListNames().then(function (data) {
            console.log(data);
            $scope.listNames = data.d.results;
            //console.log($scope.selectedItem);
        }, function () {

        });
        $scope.update = function () {
            console.log($scope.selectedItem);
            var listName = $scope.selectedItem;
            peopleService.getListItemsbyListName(listName).then(function (items) {
                $scope.data = items.d.results;
            }, function () {

            });
        }
        $scope.works = function () {
            alert("it works!");
        }
    }

    editListCtrl.$inject = ["$scope", "peopleService"];
}())