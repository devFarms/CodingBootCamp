// Initialize Firebase (YOUR OWN APP)
var database = 

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot) {
      


// Print the initial data to the console.
	console.log(snapshot.val());


// Change the html to reflect the initial value.
	 $("#click-value").text(snapshot.val().clickCount);


// Change the clickCounter to match the data in the database
	clickCounter = snapshot.val().clickCount;


// Log the value of the clickCounter
	console.log(clickCounter);

// Change the HTML Value
	$("#click-value").text();


// If any errors are experienced, log them to console.
}, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

// --------------------------------------------------------------

/*

 $("#click-button").on("click", function() {
      clickCounter++;
      database.ref().set({
        clickCount: clickCounter
      });
    });

 */

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  	clickCounter--;


  // Alert User and reset the counter
  alert(clickCounter)


  // Save new value to Firebase
  	database.ref().set({
        clickCount: clickCounter
      });


  // Log the value of clickCounter
 console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue


  // Save new value to Firebase


  // Log the value of clickCounter


  // Change the HTML Values

});
