angular.module('myApp')
.directive('map', function(){
	return{
		template: '<div id="map"></div>', 
		restrict: 'E',
		controller: function($scope){
		    $scope.map = L.map('map').setView([-30.034102019390673, -51.2052583694458], 13);

		    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		    }).addTo($scope.map);

		    var greenIcon = L.icon({
			    iconUrl: 'assets/img/fisl_icon.png',
			    iconSize: [38, 38],
			});

	        var marker = L.marker([-30.0577843,-51.1732458], {icon: greenIcon}).addTo($scope.map)
  	 	     .bindPopup('<strong>Evento:</strong> FISL 16. <br> <strong>Local:</strong> PUCRS')
		}
	}
})