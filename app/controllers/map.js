var app = angular.module('myApp', [])

.controller('MapController', function($scope, $http) {

    $scope.changePoint = function() {
        $scope.marker.setLatLng( [$scope.lat, $scope.lng]);
    };

    $http.get('assets/geojson/pubs.json').
    success(function(data, event){
        L.geoJson(data, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.name);
        }
    }).addTo($scope.map);

    }).
    error(function(data, event){

    })
});