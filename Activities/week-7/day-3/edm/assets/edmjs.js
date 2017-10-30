






    var database = firebase.database();

    var empName = "";
    var empRole = "";
    var startDate = 0;
    var empRate = 0;

    console.log(database);

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
        	rate: empRate
        })

        // Don't forget to handle the "initial load"  <--- what??????

    });


    //     function(errorObject) {
    //     console.log(err);
    // }