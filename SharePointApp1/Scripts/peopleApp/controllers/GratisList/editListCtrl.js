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
        $scope.screenTwo = false;
        $scope.works = function () {
            $scope.screenTwo = true;
        }
        var listName = $scope.searchListName;
        $scope.updateSearchList = function () {
            listName = $scope.searchListName;
        }
        $scope.searchList = function (name, lastName, position, searchListName, listOwner, company) {
            var searchObj = {
                firstName: name ? name : "",
                lastName: lastName ? lastName : "",
                position: position ? position : "",
                listOwner: listOwner ? listOwner : "",
                listName: searchListName ? searchListName : "",
                company: company ? company : ""
            };
            $scope.result = null;
            peopleService.search(searchObj).then(function (data) {
                var result = [];
                angular.forEach(data.d.results, function (item) {
                    if (item.hasOwnProperty('FullName')) {
                        result.push(item.FullName);
                    } else {
                        result.push(item);
                    }
                });
                $scope.result = result;
            });
            $scope.selectedAll = false;
            $scope.checkAll = function () {
                if ($scope.selectedAll) {
                    $scope.selectedAll = false;
                } else {
                    $scope.selectedAll = true;
                }
            }

        }
    }

    editListCtrl.$inject = ["$scope", "peopleService"];
}())