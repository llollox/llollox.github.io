$(document).ready(function () {

  var styles = [
    {
      "stylers": [
        {
          "saturation": -100
        },
        {
          "gamma": 1
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.place_of_worship",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.place_of_worship",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "water",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "saturation": 50
        },
        {
          "gamma": 0
        },
        {
          "hue": "#50a5d1"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#333333"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text",
      "stylers": [
        {
          "weight": 0.5
        },
        {
          "color": "#333333"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.icon",
      "stylers": [
        {
          "gamma": 1
        },
        {
          "saturation": 50
        }
      ]
    }
  ];

  var places = [
    {
      name: 'Treviso',
      description: 'places.treviso.description',
      photo_file: 'treviso.jpg',
      position: {
        latitude: 45.6669937,
        longitude: 12.2411323
      }
    },
    {
      name: 'Trento',
      description: 'places.trento.description',
      photo_file: 'trento.jpg',
      position: {
        latitude: 46.0744897,
        longitude: 11.1191953
      }
    },
    {
      name: 'Milano',
      description: 'places.milano.description',
      photo_file: 'milano.jpg',
      position: {
        latitude: 45.4648837,
        longitude: 9.1844683
      }
    },
    {
      name: 'Zürich',
      description: '',
      photo_file: '',
      position: {
        latitude: 47.375858,
        longitude: 8.531972
      }
    }
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(0, 0),
    scrollwheel: false,
    styles: styles
  });

  var infoWindows = {};
  var markers = {};
  var bounds = new google.maps.LatLngBounds();

  console.log(places.length);
  for (var index = 0; index < places.length; index++) {
    var place = places[index];
    var position = new google.maps.LatLng(place.position.latitude, place.position.longitude);

    var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: index.toString(),
      animation: google.maps.Animation.BOUNCE
    });

    infoWindows[index] = new google.maps.InfoWindow({
      content: 
        "<div style='width: 200px'> " +
          "<h3 class='text-align-center'>" +
            "<img src='public/images/places/" + place.photo_file + "'/>" +
            "<div class='margin-top-8'>" + place.name + "</div>" +
          "</h3>" + 
          "<p>" + 
            place.description +
            "prova" +
          "</p>" +
        "</div>"
    });
    marker.addListener('click', function() {
      this.setAnimation(null);
      for (index in infoWindows) {
        infoWindows[index].close()
      }
      infoWindows[this.title].open(map, this);
    });

    markers[index] = marker;

    bounds.extend(position);
  }

  map.fitBounds(bounds);
});