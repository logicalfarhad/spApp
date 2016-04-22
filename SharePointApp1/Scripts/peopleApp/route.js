////"use strict";
////(function () {
////    angular.module("peopleApp", ["ngRoute"])
////		.config(["$routeProvider", function ($routeProvider) {
////		    $routeProvider.when("/", {
////		        templateUrl: "../Templates/people/Home.html",
////		        controller: "allPeopleCtrl"
////		    }).when("/addPerson", {
////		        templateUrl: "../Templates/people/add.html",
////		        controller: "addPersonCtrl"
////		    }).when("/editPerson/:personId", {
////		        templateUrl: "../Templates/people/edit.html",
////		        controller: "editPersonCtrl"
////		    }).when("/CreateList", {
////		        templateUrl: "../Templates/people/CreateNewList.html",
////		        controller: "CreateListCtrl"
////		    }).when("/EditExistingList", {
////		        templateUrl: "../Templates/people/EditExistingList.html",
////		        controller: "editPersonCtrl"
////		    }).when("/all", {
////		        templateUrl: "../Templates/people/all.html",
////		        controller: "allPeopleCtrl"
////		    });
////		}]);
////})();

//(function () {
//    angular.module("peopleApp", ["ngRoute"]).config(config);

//    function config($stateProvider, $urlRouterProvider) {
//        $urlRouterProvider.otherwise('/');
//        $stateProvider.state('home', {
//            templateUrl: "../Templates/people/Home.html",
//            controller: "allPeopleCtrl"
//        });
//    }
//    config.$inject = ["$stateProvider", "$urlRouterProvider"];
//}())