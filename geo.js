function mapa(myposition) {
  var mapOptions = {
    center: myposition,
    zoom: 15
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var marker = new google.maps.Marker({
      position: map.center,
      map: map,
      title: 'Hello World!'
  });
}

function geoSuccess(position) {
	var myposition = new google.maps.LatLng( position.coords.latitude, position.coords.longitude );

	mapa( myposition );
}

function geoError(err) {
	var myposition = new google.maps.LatLng( -33.469120, -70.641997 );

	mapa( myposition );
}

function localize() {
	if (navigator.geolocation) {
		var geo = navigator.geolocation;
		geo.getCurrentPosition(geoSuccess, geoError)

	} else {
		geoError();
	}
}



