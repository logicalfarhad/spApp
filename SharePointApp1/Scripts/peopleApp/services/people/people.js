"use strict";
(function () {
    angular.module("peopleApp")
        .factory("peopleService", [
            "baseSvc", function (baseService) {
                var listEndPoint = "/_api/web/lists";
                var getAll = function () {
                    var query = listEndPoint + "/GetByTitle('People')/Items?$select=ID,FirstName,LastName,Address";
                    return baseService.getRequest(query);
                };
                var getListNames = function () {
                    return baseService.getRequest(listEndPoint + "?$select=Title&$orderby=Title asc &$filter=Description eq 'Gratis List'");
                };
                var getListItemsbyListName = function (listName) {
                    var query = listEndPoint + "/GetByTitle('" + listName + "')/Items";
                    return baseService.getRequest(query);
                }
                var search = function (searchObj) {
                    var searchUrl = listEndPoint + "/GetByTitle('" + searchObj.listName + "')/items?$select=ID,FirstName,LastName &$filter=(substringof('" + searchObj.firstName + "', FirstName)) or (substringof('" + searchObj.lastName + "', LastName))  or (substringof('" + searchObj.position + "', Position))  or (substringof('" + searchObj.company + "', Company))";
                    return baseService.getRequest(searchUrl);
                };
                var addNew = function (person) {
                    var data = {
                        __metadata: { 'type': "SP.Data.PeopleListItem" },
                        FirstName: person.firstName,
                        LastName: person.lastName,
                        Address: person.address
                    };
                    var url = listEndPoint + "/GetByTitle('People')/Items";
                    return baseService.postRequest(data, url);
                };
                var getById = function (personId) {
                    var query = listEndPoint + "/GetByTitle('People')/GetItemById(" + personId + ")?$select=ID,FirstName,LastName,Address";
                    return baseService.getRequest(query);
                };
                var update = function (person) {
                    var data = {
                        __metadata: { 'type': "SP.Data.PeopleListItem" },
                        FirstName: person.firstName,
                        LastName: person.lastName,
                        Address: person.address
                    };
                    var url = listEndPoint + "/GetByTitle('People')/GetItemById(" + person.personId + ")";
                    return baseService.updateRequest(data, url);
                };
                var remove = function (personId) {
                    var url = listEndPoint + "/GetByTitle('People')/GetItemById(" + personId + ")";
                    return baseService.deleteRequest(url);
                };
                var checkListExist = function (newListName) {
                    var listEndPoint = "/_vti_bin/listdata.svc" + "/People";
                    var getAll = function () {
                        var query = listEndPoint; //+ "/" + newListName;
                        return baseService.checkBeforeCreate(query);
                    };
                };
                var addNewList = function (newListName) {
                    var result;
                    var url = listEndPoint + "/_vti_bin/ListData.svc/People"; //+ person.personId + ")";
                    //var result = baseService.checkListExist(newListName, url);
                    baseService.checkListExist(newListName, function (listExists) {
                        result = (listExists);
                    }, function (sender, args) {
                        result = args.get_message();
                    });
                };
                return {
                    getAll: getAll,
                    addNew: addNew,
                    getById: getById,
                    update: update,
                    remove: remove,
                    addNewList: addNewList,
                    getListNames: getListNames,
                    search: search,
                    getListItemsbyListName: getListItemsbyListName
                };
            }
        ]);
})();