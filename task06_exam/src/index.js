// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, "load", init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 17,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(25.7638584, -80.1917582), // 1001 Brickell Bay Dr, Miami, FL 33131, США

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        featureType: "landscape.man_made",
        elementType: "geometry",
        stylers: [{ color: "#f7f1df" }]
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#d0e3b4" }]
      },
      {
        featureType: "landscape.natural.terrain",
        elementType: "geometry",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "poi.business",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "poi.medical",
        elementType: "geometry",
        stylers: [{ color: "#fbd3da" }]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#bde6ab" }]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffe15f" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#efd151" }]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffffff" }]
      },
      {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [{ color: "black" }]
      },
      {
        featureType: "transit.station.airport",
        elementType: "geometry.fill",
        stylers: [{ color: "#cfb2db" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#a2daf2" }]
      }
    ]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById("map");

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(25.7638584, -80.1917582),
    map: map,
    title: "1001 Brickell Bay Dr, Miami, FL 33131, США"
  });
}
