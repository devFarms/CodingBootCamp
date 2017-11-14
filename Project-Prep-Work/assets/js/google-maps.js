/*


    // This example requires the Places library. Include the libraries=places
    // parameter when you first load the API. For example:
    // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

    var map;
    var infowindow;
    var latitude = 34.0430;
    var longitude = -118.2673;

    function initMap() {
        // var myConcert = { lat: 33.6405, lng: -117.8443 };
        // var myConcert = { lat: johnsGlobal[*]._embedded.venues[0].location.latitude, lng: johnsGlobal[*]._embedded.venues[0].location.latitude}
        console.log(latitude, longitude);

        var myConcert = { lat: latitude, lng: longitude }
        // var myConcertIcon = "https://www.coastway.com/images/ico-locations.svg"
        var myConcertIcon = "./assets/images/place-marker-concert.png"

        map = new google.maps.Map(document.getElementById('map'), {
            center: myConcert,
            zoom: 13
        });

        var marker = new google.maps.Marker({
            position: myConcert,
            icon: myConcertIcon,
            map: map
        });

        infowindow = new google.maps.InfoWindow();


        var restaurants = new google.maps.places.PlacesService(map);
        restaurants.nearbySearch({
            location: myConcert,
            radius: 4000,
            type: ['restaurant'],
            openNow: true
        }, callback);
    }

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    function createMarker(place) {
        // var myRestaurantIcon = "https://www.clker.com/cliparts/y/W/e/8/a/1/red-plate-with-knife-and-fork-th.png"
        var myRestaurantIcon = "./assets/images/place-marker-food.png"
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            icon: myRestaurantIcon,
            map: map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }

//https://maps.googleapis.com/maps/api/js?key=AIzaSyDsqsGRoeCFaylDOCU1XPjy7liKohqa_Qg&libraries=places&callback=initMap" async defer></script>
*/





/*
console.log("This is the event search global variable: " + eventSearch)
console.log("============================================================")
console.log(response._embedded.events[0]._embedded.venues[0].city.name);
console.log(queryURL);
*/