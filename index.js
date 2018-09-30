//Initializations:
var lati;
var longi;
var map;
var directionsService;
var directionsDisplay;
var listOfObjects = [];
var myLatLng;


//Firebase Stuff
var config = { // Initialize Firebase
    // Your Firebase Project Credintials
};
firebase.initializeApp(config);

const dbRefObject = new Firebase("<firebase-db-link>");


dbRefObject.on('value', function (snapshot) {


    snapshot.forEach(function (childSnapshot) {
        var singleObj = [];
        singleObj[0] = childSnapshot.val().Name;
        singleObj[1] = childSnapshot.val().Info;
        singleObj[2] = parseFloat(childSnapshot.val().latitude);
        singleObj[3] = parseFloat(childSnapshot.val().longitude);

        listOfObjects.push(singleObj);
    });
    
    console.log(listOfObjects[2][0] + " | " + listOfObjects[2][1] + " | " + listOfObjects[2][2] + " | " + listOfObjects[2][3]);

});


//Map Stuff
function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
    map.setTilt(50);

    // Multiple markers location, latitude, and longitude.
    // used `listOfObjects` to fill this array for a real-time experience.
    var markers = [
        ['Blaise Pascal', 31.5546, 74.3572],
        ['Chien-Shiung Wu', 32.5711, 74.0750],
        ['Enrico Fermi', 30.8090, 73.4508],
        ['Sarah Boysen', 32.1544, 74.1842]
    ];

    // Info window content
    var infoWindowContent = [
        ['<div class="info_content">' +
            '<h3>Blaise Pascal, Lahore, PK</h3>' +
            '<p>Lahore is the capital city of the Pakistani province of Punjab. It is the second largest and most populous city in Pakistan, after Karachi, and the 32nd most populous urban city in the world</p>' + '</div>'],
        ['<div class="info_content">' +
            '<h3>Chien-Shiung Wu, Gujrat City, PK</h3>' +
            '<p>Gujrat, is a city in Punjab Province of Pakistan. It is the capital of Gujrat District and the 18th largest city of Pakistan. Gujrat Tehsil subdivision in the Punjab Province.</p>' +
            '</div>'],
        ['<div class="info_content">' +
            '<h3>Enrico Fermi, Okara, PK</h3>' +
            '<p>Okara, is the capital city of Okara District in the Punjab province of Pakistan. The name Okara is derived from Okaan, the name of a type of tree</p>' +
            '</div>'],
        ['<div class="info_content">' +
            '<h3>Sarah Boysen, Gujranwala, PK</h3>' +
            '<p>Gujranwala is an industrial city in Gujranwala District in the province of Punjab in Pakistan. Gujranwala is 226 metres above sea level and is the seventh-most-populous of the Pakistani metropolitan areas.</p>' +
            '</div>']
    ];

    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    // Place each marker on the map  

    for (i = 0; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

        // Add info window to marker    
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
        this.setZoom(8);
        google.maps.event.removeListener(boundsListener);
    });

}
// Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);