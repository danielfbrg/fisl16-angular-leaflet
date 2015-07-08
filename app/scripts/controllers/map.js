var app = angular.module('myApp', [])

.controller('MapController', function($scope, $http) {

    $http.get('assets/geojson/brazil-states-simplified.geojson').
    success(function(data, event){
        var layer = L.geoJson(data, {
            style: style,
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.sigla);
        }
    }).addTo($scope.map);

    $scope.map.fitBounds(layer.getBounds());

    }).
    error(function(data, event){
        console.log('Error getting json');
    })


    function getColor(regiao) {
        return regiao == 'NORDESTE'     ? '#FC4E2A' :
               regiao == 'NORTE'        ? '#009933' :
               regiao == 'SUDESTE'      ? '#E31A1C' :
               regiao == 'SUL'          ? '#0066FF' :
               regiao == 'CENTRO-OESTE' ? '#FFCC00' :
                                          '#FFEDA0';
    }

    function style(feature) {
        return {
            fillColor: getColor(feature.properties.regiao),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

});