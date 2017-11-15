// Google Maps API Key : AIzaSyAHZTkBCcadYHRcvz0_xGnftVtDCjaQH0k


var input = "";

console.log('Ready...');

/*
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: true // Close upon selecting a date,
  });

function activatePlacesSearch(){

    input = document.getElementById('input-search-city');
	autocomplete = new google.maps.places.Autocomplete(input);
    
};
*/


// Google Maps Code
var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'short_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('input-search-city')),
      {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

/*
function myFunction (){
var eventCity = document.getElementById("locality").value;
var eventCountry = document.getElementById("country").value;
console.log(eventCity + ", " + eventCountry);
};

*/

$(document).on('click', '#btn-search-city', function(e) {
    e.preventDefault();
    $('html,body').animate({
    scrollTop: $('#two').offset().top},
    'slow');
    
    // input = $('#input-search-city').val().trim();
    // console.log(input.split(','));
    //console.log(autocomplete);

    var eventCity = document.getElementById("locality").value;
    var eventCountry = document.getElementById("country").value;
    console.log(eventCity + ", " + eventCountry);

    var startDate = $('#start-date').val().trim();
    var endDate = $('#end-date').val().trim();
    console.log(startDate);
    console.log(endDate);
});

$(document).on('click', '.card', function(e) {
        e.preventDefault();
        $('html,body').animate({
        scrollTop: $('#three').offset().top},
        'slow');
    });