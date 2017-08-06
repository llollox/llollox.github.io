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
        ['Treviso', 45.6669937,12.2411323, 4, "Treviso Description"],
        ['Trento', 46.0744897,11.1191953, 5, "Trento Description"],
        ['Milan', 45.4648837,9.1844683, 3, "Milan Description"]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(0, 0),
        zoom: 8,
        scrollwheel: false,
        styles: styles
    });

    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < places.length; i++) {
        var beach = places[i];
        var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: beach[0],
            zIndex: beach[3]
        });
        bounds.extend(myLatLng);

        var infowindow = new google.maps.InfoWindow({
            content: beach[4]
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    }

    map.fitBounds(bounds);
});