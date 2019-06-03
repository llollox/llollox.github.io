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
            description: {
                en: 
                    "Treviso is my city. Here I was <strong>born</strong> in 1991.<br/>" +
                    "I love <strong>motorbikes</strong> since I was a child.<br/>"+
                    "At 14 years old I couldn't wait to buy a scooter and go everywhere with friends.<br/>" +
                    "Now, I'm back in Treviso to stay with my family for a while, before to move on.",

                it: 
                    "Treviso è la mia città. Quí <strong>nacqui</strong> nel 1991.<br/>" +
                    "Amo le <strong>moto</strong> da quando ero bambino.<br/>" +
                    "A 14 anni non vedevo l'ora di avere uno scooter per poter andare in giro con gli amici!.<br/>" +
                    "Ora, sono tornato per un periodo a Treviso per poter stare un pochino con la mia famiglia prima della prossima tappa.</br>"
            },
            photo_file: 'treviso.jpg',
            position: {
              latitude: 45.6669937,
              longitude: 12.2411323
            }
          },
          {
            name: 'Trento',
            description: {
                en: 
                    "In Trento I studied computer science at the <strong>university</strong> since 2010 to 2015. " +
                    "Here I get in touch with a lot of people from every part of the <strong>world</strong>. I've also " +
                    "discovered the passion for <strong>road bikes</strong> having fun with many trips on the mountains.",

                it: 
                    "A Trento studiai informatica all'università dal 2010 al 2015.<br/>" +
                    "Quí ho avuto la fortuna ed il piacere di conoscere persone da tutto il mondo<br/>" +
                    "Ho inoltre scoperto di avere la passione per la <strong>bicicletta</strong> essendo circondato dalle montagne più belle d'Italia.<br/>" 
            },
            photo_file: 'trento.jpg',
            position: {
              latitude: 46.0744897,
              longitude: 11.1191953
            }
          },
          {
            name: 'Milano',
            description: {
                en: 
                    "In April 2016 I moved to Milan. I was so curious about Milan and live in a <strong>metropoly</strong>" +
                    "and work for a very <strong>big corporation</strong>. Here I've also learnt many food <strong>recipes</strong> " +
                    "from my room mates from Naples.",

                it: 
                    "Nell'aprile 2016 mi sono spostato a Milano. Essendo abituato alle piccole città ero davvero curioso di cosa volesse dire vivere in una grande metropoli, e lavorare per una <strong>grande azienda</strong>.<br/>" +
                    "Quí ho avuto il piacere di imparare a cucinare molte ricette particolari dai miei coinquilini napoletani."
            },
            photo_file: 'milano.jpg',
            position: {
              latitude: 45.4648837,
              longitude: 9.1844683
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
            content: ""
        });
        marker.addListener('click', function() {
            this.setAnimation(null);
            for (index in infoWindows) {
                infoWindows[index].close()
            }
            let infoWindow = infoWindows[this.title];
            infoWindow.setContent(buildInfoWindowContent(places[this.title]));
            infoWindow.open(map, this);
        });

        markers[index] = marker;

        bounds.extend(position);
    }

    map.fitBounds(bounds);
});

function buildInfoWindowContent(place) {
    let lang = translator.lang();

    return "<div style='width: 200px'> " +
    "<h3 class='text-align-center'>" +
      "<img src='public/images/places/" + place.photo_file + "'/>" +
      "<div class='margin-top-8'>" + place.name + "</div>" +
    "</h3>" + 
    "<p>" + 
      place.description[lang] +
    "</p>" +
  "</div>";
}