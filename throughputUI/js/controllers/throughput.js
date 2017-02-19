var myApp = angular.module('myApp', []);

myApp.controller('ThroughputController', ['$scope', 'iperfService', function($scope, iperfService) {

    $scope.showSpinner = false;
    $scope.showResult = false;
    $scope.server = "";

    $scope.getTestResults = function (server, reverse) {
        $scope.showSpinner = true;
        $scope.showResult = false;
        iperfService.getTestResults(server, reverse).then(function(response) {
            $scope.fullResults = response.data.intervals;
            $scope.averageResult = (response.data.end.streams[0].receiver.bits_per_second / 1000000).toFixed(2);
            $scope.showSpinner = false;
            $scope.showResult = true;
        });
    };
}]);
