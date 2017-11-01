// Show users current time on the page
$("#current-time").text(moment().format('LLLL'));

// Setting up the variables

// The <FORM> variables 
var trainName = "";
var trainDestination = "";
var trainFirst = "";
var trainFrequency = 0;
var trainNext = 0;

// Calculated variables
var nextTrain = 0;
var minutesAway = 0;

var firebaseRef = firebase.database().ref();



firebaseRef.on("child_added", snap => {
	var trainName = snap.child("trainName").val();
	var trainDestination = snap.child("trainDestination").val();
	var trainFirst = snap.child("trainFirst").val();
	var trainFrequency = snap.child("trainFrequency").val();
    trainFrequency = Number(trainFrequency);

    var currentTime = new Date(),
        trainNext = new Date (currentTime);
        trainNext.setMinutes(currentTime.getMinutes() + trainFrequency);
    console.log(trainFrequency);
    console.log(trainNext);


	$("#train-timetable").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>Every " + trainFrequency + " minutes</td><td>" + trainNext + "</td><td>Minutes Away Calc Here</td><td><button type='button' class='btn btn-danger'>Cancel Train</button></td></tr>")
});


$("#btn-add-train").on("click", function() {

	// Don't refresh the page!
    event.preventDefault();

    trainName = $("#train-name").val().trim();
    trainDestination = $("#train-destination").val().trim();
    trainFirst = $("#train-first").val().trim();
    trainFrequency = $("#train-frequency").val().trim();
    
    // Testing <FORM> inputs
    // console.log(trainName);
    // console.log(trainDestination);
    // console.log(trainFrequency);

    // Send <FORM> input values to Firebase.
    firebaseRef.push().set({
        	trainName: trainName
        ,	trainDestination: trainDestination
        ,	trainFrequency: trainFrequency
        ,	trainFirst: trainFirst
        // ,	dateAdded: firebaseRef.ServerValue.TIMESTAMP
    });
});

