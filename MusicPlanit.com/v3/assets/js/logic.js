// Google Maps API Key : AIzaSyAHZTkBCcadYHRcvz0_xGnftVtDCjaQH0k

console.log('Ready...');

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: true // Close upon selecting a date,
  });

function activatePlacesSearch(){

	var input = document.getElementById('input-search-city');
	var autocomplete = new google.maps.places.Autocomplete(input);

	$(document).on('click', '#btn-search-city', function(e) {
        e.preventDefault();
        $('html,body').animate({
        scrollTop: $('#two').offset().top},
        'slow');
        
        input = $('#input-search-city').val().trim();
        console.log(input.split(','));

        var startDate = $('#start-date').val().trim();
        var endDate = $('#end-date').val().trim();
        console.log(startDate);
        console.log(endDate);
    });
}

$(document).on('click', '.card', function(e) {
        e.preventDefault();
        $('html,body').animate({
        scrollTop: $('#three').offset().top},
        'slow');
    });