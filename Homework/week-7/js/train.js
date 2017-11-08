// Show users current time on the page
$("#current-time").text(moment().format('LLLL'));

// Setting up the variables

// The <FORM> variables 
var trainName = "";
var trainDestination = "";
var trainFirst = "";
var trainFrequency = 0;

// Calculated variables
var trainNext = 0;
var trainMinutesAway = 0;

var now = moment().format();

var firebaseRef = firebase.database().ref();

firebaseRef.on("child_added", snap => {
	var trainName = snap.child("trainName").val();
	var trainDestination = snap.child("trainDestination").val();
	var trainFirst = snap.child("trainFirst").val();
    trainFirst = moment(trainFirst, "hh:mm:ss", false).format('llll');
	var trainFrequency = snap.child("trainFrequency").val();
    trainFrequency = Number(trainFrequency);

    function addTime(){
        moment(trainFirst, "hh:mm:ss a", false).add(trainFrequency, "m").format("llll");
    }

    console.log()
    // trainNext = moment(trainFirst, "hh:mm:ss a", false).add(trainFrequency, "m").format("llll");


    trainMinutesAway = moment().to(trainNext, "hh:mm:ss", false);

    console.log("Current time: " + now);
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainFirst);
    console.log(trainNext);
    console.log(trainFrequency);

/*
    var currentTime = new Date(),
        trainNext = new Date (currentTime);
        trainNext.setMinutes(currentTime.getMinutes() + trainFrequency);
    console.log(trainFrequency);
    console.log(trainNext);
*/

	$("#train-timetable").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>Every " + trainFrequency + " minutes</td><td>" + trainNext + "</td><td>" + trainMinutesAway + "</td><td><button type='button' class='btn btn-danger'>Remove Train</button></td></tr>")
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

