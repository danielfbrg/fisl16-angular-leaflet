angular.module('myApp')
.directive('map', function(){
	return{
		template: '<div id="map"></div>', 
		restrict: 'E',
		controller: function($scope){
		    $scope.map = L.map('map').setView([-30.034102019390673, -51.2052583694458], 13);

		    var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		    }).addTo($scope.map);

		    var satellite = L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/maptile/{mapID}/satellite.day/{z}/{x}/{y}/256/png8?app_id={app_id}&app_code={app_code}', {
			    attribution: 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
			    subdomains: '1234',
			    mapID: 'newest',
			    app_id: 'Y8m9dK2brESDPGJPdrvs',
			    app_code: 'dq2MYIvjAotR8tHvY8Q_Dg',
			    base: 'aerial',
			    maxZoom: 20
			});

		    var greenIcon = L.icon({
			    iconUrl: 'assets/img/fisl_icon.png',
			    iconSize: [38, 38],
			});

	        var marker = L.marker([-30.0577843,-51.1732458], {icon: greenIcon}).addTo($scope.map)
  	 	     .bindPopup('<strong>Evento:</strong> FISL 16. <br> <strong>Local:</strong> PUCRS');

			var baseLayers = {
				'OpenStreetMap': osm,
				'SatelliteDay': satellite
			};

 	 		var overlayLayers = {
		        // 'Brasil': $scope.brasil,
		        'Fisl16': marker
		    };

		    

		    $scope.control = L.control.layers(baseLayers, overlayLayers).addTo($scope.map);
		}
	}
})