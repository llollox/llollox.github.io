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
    }

    // ['Treviso', 45.6669937,12.2411323, 4, "" +
    // "<h3 class='text-align-center'>" +
    // "<img src='public/images/places/treviso.jpg'/>" +
    // "<div class='margin-top-8'>Treviso</div>" +
    // "</h3>" +
    // "<p>Treviso is my city. Here I was <strong>born</strong> and brought up. <br/>" +
    // "I love <strong>motorbikes</strong> Since I was a child. At 14 years old " +
    // "I couldn't wait to buy a scooter and go everywhere with friends.<br/>" +
    // "Now, I'm back in Treviso to stay with my family for a while.</p>"],
    // ['Trento', 46.0744897,11.1191953, 5, "" +
    // "<h3 class='text-align-center'>" +
    // "<img src='public/images/places/trento.jpg'/>" +
    // "<div class='margin-top-8'>Trento</div>" +
    // "</h3>" +
    // "<p>In Trento I studied computer science at the <strong>university</strong> since 2010 to 2015. " +
    // "Here I get in touch with a lot of people from every part of the <strong>world</strong>. I've also " +
    // "discovered the passion for <strong>road bikes</strong> having fun with many trips on the mountains." +
    // "</p>"],
    // ['Milan', 45.4648837,9.1844683, 3, "" +
    // "<h3 class='text-align-center'>" +
    // "<img src='public/images/places/milano.jpg'/>" +
    // "<div class='margin-top-8'>Milan</div>" +
    // "</h3>" +
    // "<p>In April 2016 I moved to Milan. I was so curious about Milan and live in a <strong>metropoly</strong>" +
    // "and work for a very <strong>big corporation</strong>. Here I've also learnt many food <strong>recipes</strong> " +
    // "from my room mates from Naples." +
    // "</p>"]
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(0, 0),
    scrollwheel: false,
    styles: styles
  });

  var infoWindows = {};
  var markers = {};
  var bounds = new google.maps.LatLngBounds();

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