myApp.factory('iperfService', function($http) {
    var iperfService = {
        getTestResults: function(server, reverse) {
            var config = {
                params: {
                    serverIp: server,
                    reverseFlag: reverse
                }
            }

            var promise = $http.get("http://localhost:3000/", config).then(function (response) {
                return response;
            });
            return promise;
        }
    };
    return iperfService;
});