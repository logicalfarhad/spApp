"use strict";
(function() {
    angular.module("peopleApp").factory("baseSvc", [
        "$http", "$q", function($http, $q) {
            var baseUrl = _spPageContextInfo.siteAbsoluteUrl;
            var getRequest = function(query) {
                var deferred = $q.defer();
                $http({
                    url: baseUrl + query,
                    method: "GET",
                    headers: {
                        "accept": "application/json;odata=verbose",
                        "content-Type": "application/json;odata=verbose"
                    }
                }).success(function(result) {
                    deferred.resolve(result);
                }).error(function(result, status) {
                    deferred.reject(status);
                });
                return deferred.promise;
            };
            var postRequest = function(data, url) {
                var deferred = $q.defer();
                $http({
                        url: baseUrl + url,
                        method: "POST",
                        headers: {
                            "accept": "application/json;odata=verbose",
                            "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
                            "content-Type": "application/json;odata=verbose"
                        },
                        data: JSON.stringify(data)
                    })
                    .success(function(result) {
                        deferred.resolve(result);
                    })
                    .error(function(result, status) {
                        deferred.reject(status);
                    });
                return deferred.promise;
            };
            var updateRequest = function(data, url) {
                var deferred = $q.defer();
                $http({
                        url: baseUrl + url,
                        method: "PATCH",
                        headers: {
                            "accept": "application/json;odata=verbose",
                            "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
                            "content-Type": "application/json;odata=verbose",
                            "X-Http-Method": "PATCH",
                            "If-Match": "*"
                        },
                        data: JSON.stringify(data)
                    })
                    .success(function(result) {
                        deferred.resolve(result);
                    })
                    .error(function(result, status) {
                        deferred.reject(status);
                    });
                return deferred.promise;
            };
            var deleteRequest = function(url) {
                var deferred = $q.defer();
                $http({
                        url: baseUrl + url,
                        method: "DELETE",
                        headers: {
                            "accept": "application/json;odata=verbose",
                            "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
                            "IF-MATCH": "*"
                        }
                    })
                    .success(function(result) {
                        deferred.resolve(result);
                    })
                    .error(function(result, status) {
                        deferred.reject(status);
                    });
                return deferred.promise;
            };
            var createListReguest = function(data, url) {
                var deferred = $q.defer();
                $http({
                        url: baseUrl + url,
                        method: "PATCH",
                        headers: {
                            "accept": "application/json;odata=verbose",
                            "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
                            "content-Type": "application/json;odata=verbose",
                            "X-Http-Method": "PATCH",
                            "If-Match": "*"
                        },
                        data: JSON.stringify(data)
                    })
                    .success(function(result) {
                        deferred.resolve(result);
                    })
                    .error(function(result, status) {
                        deferred.reject(status);
                    });
                return deferred.promise;
            };
            var checkListExist = function(llistTitle, OnSuccess, OnError) {
                var deferred = $q.defer();

                var ctx = SP.ClientContext.get_current();
                var web = ctx.get_web();
                var lists = web.get_lists();
                ctx.load(lists);

                ctx.executeQueryAsync(
                    function() {
                        var listExists = false;
                        var le = lists.getEnumerator();
                        while (le.moveNext()) {
                            var list = le.get_current();
                            if (list.get_title() == llistTitle) {
                                listExists = true;
                                break;
                            }
                        }

                        OnSuccess(listExists);
                    },
                    OnError
                );

            };
            return {
                getRequest: getRequest,
                postRequest: postRequest,
                updateRequest: updateRequest,
                deleteRequest: deleteRequest,
                createListReguest: createListReguest,
                checkListExist: checkListExist
            };
        }
    ]);
})();