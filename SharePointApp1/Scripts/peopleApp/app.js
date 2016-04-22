(function () {
    angular.module("peopleApp", ["ui.router", "ngSanitize"]).config(config);
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home',
            {
                url: '/home',
                templateUrl: "../Scripts/people/menu.html",
                controller: "allPeopleCtrl"
            }).state('home.all',
            {
                url: '/all',
                templateUrl: "../Scripts/people/all.html",
                controller: "allPeopleCtrl"
            }).state('home.addPerson', {
                url: '/add',
                templateUrl: "../Scripts/people/add.html",
                controller: "addPersonCtrl"
            }).state('home.createList', {
                url: '/createList',
                templateUrl: "../Scripts/people/CreateNewList.html",
                controller: "CreateListCtrl"
            }).state('home.editExistingList', {
                url: "/editExistingList",
                templateUrl: "../Scripts/people/EditExistingList.html",
                controller: function () {

                }
            }).state('home.edit', {
                url: "/editPerson/:personId",
                templateUrl: "../Scripts/people/edit.html",
                controller: "editPersonCtrl"
            });
    }
    config.$inject = ["$stateProvider", "$urlRouterProvider"];
}())