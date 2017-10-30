var database = firebase.database();

var empName = "";
var empRole = "";
var startDate = 0;
var empRate = 0;

// Capture Button Click
$("#submitBtn").on("click", function() {

    // Don't refresh the page!
    event.preventDefault();

    empName = $("#nameInput").val().trim();
    empRole = $("#roleInput").val().trim();
    startDate = $("#startInput").val().trim();
    empRate = $("#rateInput").val().trim();

    // Code in the logic for storing and retrieving the most recent user.
    database.ref().push({
        name: empName,
        role: empRole,
        date: startDate,
        rate: empRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    //database.ref().orderByChild("dateAdded").limitToLast(1).("child_added", function(snapshot){
    //database.ref().on("value", function(snapshot){
    database.ref().orderByChild("dateAdded").limitToLast(1).("child_added", function(childSnapshot){
        console.log("Last Entry into Database");
        console.log(childSnapshot.val().name);
        };/*

        // Output all of the new information into the relevant HTML sections

        $("#name-display").text(name);
        $("#email-display").text(email);
        $("#age-display").text(age);
        $("#comment-display").text(comment);
    };
    */
});