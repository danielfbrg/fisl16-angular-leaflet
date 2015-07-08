angular.module('myApp', ['thematicMap'])
.controller('MapController', function($scope, $http,getColor, style, highlightFeature) {

    //Getting geojson simplified of Brazil
    $http.get('assets/geojson/brazil-states-simplified.geojson').
    success(function(data, event){
        $scope.brasil = L.geoJson(data, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo($scope.map);

        $scope.map.fitBounds($scope.brasil.getBounds());
        $scope.control.addOverlay($scope.brasil, 'Brasil');
    }).
    error(function(data, event){
        console.log('Error getting json');
    })

    /*Function that reset the feature when mouse over
    called on onEachFeature -> layer.on({mouseout})*/
    function resetHighlight(e) {
        $scope.brasil.resetStyle(e.target);
    }

    /*Function that zoom map on selected feature
    called on onEachFeature -> layer.on({click})*/
    function zoomToFeature(e) {
        $scope.map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }


});