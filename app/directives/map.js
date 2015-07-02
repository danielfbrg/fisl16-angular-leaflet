angular.module('myApp')
.directive('map', function(){
	return{
		template: '<div id="map"></div>', 
		restrict: 'AE',
		controller: function($scope){
		   var map = L.map('map').setView([-30.034102019390673, -51.2052583694458], 13);

		    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		    }).addTo(map);

		    $scope.marker = L.marker([-30.0577843,-51.1732458]).addTo(map)
		    .bindPopup('<strong>Evento:</strong> FISL 16. <br> <strong>Local:</strong> PUCRS')
		    .openPopup();
		}
	}
})