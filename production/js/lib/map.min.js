  function initialize() {
	    var mapOptions = {
	      center: new google.maps.LatLng(55.882593,37.549939), //CENTER
	      zoom: 16,
	    scrollwheel: false,
	    zoomControl: true,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    var map = new google.maps.Map(document.getElementById("map_canvas"),
	        mapOptions);

	  var marker_pos_1 = new google.maps.LatLng(55.882593,37.549939);
	  var image = 'img/marker.png'; //img marker
	  var marker_1 = new google.maps.Marker({
	      position: marker_pos_1,
	      map: map,
	      icon: image //MARKER IMAGE
	  });
}