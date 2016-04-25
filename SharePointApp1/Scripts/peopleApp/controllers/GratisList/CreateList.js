"use strict";
(function() {
    angular.module("peopleApp")
        .controller("CreateListCtrl", [
            "$scope", "peopleService", "$location", function($scope, peopleService, $location) {
                peopleService.getListNames().then(function(data) {
                    $scope.listNames = data.d.results;
                }, function(err) {
                    console.log(err);
                });
                $scope.peopleList = [];
                $scope.searchList = function() {
                    var searchObj = {
                        firstName: $scope.firstName ? $scope.firstName : "",
                        lastName: $scope.lastName ? $scope.lastName : "",
                        company: $scope.company ? $scope.company : "",
                        position: $scope.position ? $scope.position : ""
                    };
                    if ($scope.selectedListName) {
                        searchObj.listName = $scope.selectedListName;
                        peopleService.search(searchObj).then(function(result) {
                            var searchedPeopleList = [];
                            result.d.results.forEach(function(item) {
                                searchedPeopleList.push({
                                    Id: item.ID,
                                    Name: item.LastName + "," + item.FirstName
                                });
                            });
                            $scope.peopleList = searchedPeopleList;
                        }, function() {

                        });
                    } else {
                        alert("Please select a list to search");
                    }
                };


                //$scope.createList = function (newListName) {
                //    peopleService.addNewList(newListName)
                //    .then(function (response) {
                //        $location.path("/");
                //    });

                //};
            }
        ]);
})();