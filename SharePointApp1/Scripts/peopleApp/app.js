(function () {
    angular.module("peopleApp", ["ui.router", "ngSanitize"]).config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider.state("home",
        {
            url: "/home",
            templateUrl: "../Scripts/people/home.html",
            controller: "allPeopleCtrl"
        }).state("people",
        {
            url: "/people",
            templateUrl: "../Scripts/people/menu.html",
            controller: "allPeopleCtrl"
        }).state("people.all", {
            url: "/allpeople",
            templateUrl: "../Scripts/people/all.html",
            controller: "allPeopleCtrl"
        }).state("people.addPerson", {
            url: "/add",
            templateUrl: "../Scripts/people/add.html",
            controller: "addPersonCtrl"
        }).state("people.createList", {
            url: "/createList",
            templateUrl: "../Scripts/people/createNewList.html",
            controller: "CreateListCtrl"
        }).state("people.editExistingList", {
            url: "/editExistingList",
            templateUrl: "../Scripts/people/editExistingList.html",
            controller: "editListCtrl"
        }).state("people.edit", {
            url: "/editPerson/:personId",
            templateUrl: "../Scripts/people/edit.html",
            controller: "editPersonCtrl"
        });
    }

    config.$inject = ["$stateProvider", "$urlRouterProvider"];
}())