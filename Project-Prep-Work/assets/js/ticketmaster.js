var eventSearch = [];

$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    city = $("#searchString").val().trim();
    $("#lgList").empty();
    $("#smList").empty();
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?&apikey=BZAkAGm6c4G9IYugsrmGfucSP3F5PcSf&city=" + city;

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            console.log(response);
            eventSearch = response;
            for (i = 0; i < response._embedded.events.length; i++) {
                var eventName = response._embedded.events[i].name;
                if (eventName.length > 20) {
                    eventName = eventName.slice(0, 20) + "...";
                }
                var eventButton = $("<button>");
                eventButton.attr("type", "button");
                eventButton.attr("class", "btn event-button");
                eventButton.attr("data-toggle", "modal");
                eventButton.attr("data-target", "#musicPlanitModal");
                eventButton.attr("id", "eventBtn");
                eventButton.text("Details");

                var eventImage = $("<img>");
                eventImage.attr("src", response._embedded.events[i].images[9].url);
                eventImage.attr("class", "event-image");

                var divContainer = $("<div>");
                divContainer.attr("id", response._embedded.events[i].id);
                divContainer.attr("class", "col-sm-12 col-md-3 event-box");
                divContainer.attr("data-index", i);
                divContainer.append(eventImage);
                divContainer.append("<h3>" + eventName + "</h3>");
                divContainer.append(eventButton);
                $("#lgList").append(divContainer);

                var divContainerSm = $("<div>");
                divContainerSm.attr("class", "eventElemSm");
                divContainerSm.attr("data-toggle", "modal");
                divContainerSm.attr("data-target", ".musicPlanitModal");
                divContainerSm.attr("data-index", i);
                divContainerSm.html("<p>" + eventName + "</p>");
                $("#smList").prepend(divContainerSm);
            }

            $("#eventBtn").click(function(e){
    e.preventDefault();
    console.log(eventName);
})
            
            //console.log(response._embedded.events[0]._embedded.venues[0].city.name);
            //console.log(queryURL);
        })
});