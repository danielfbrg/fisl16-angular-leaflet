var app = angular.module('myApp', [])

.controller('MapController', function($scope, $http) {

    $scope.changePoint = function() {
        $scope.marker.setLatLng( [$scope.lat, $scope.lng]);
    };


});