// 4c6db12a69f5430ab711c81b1e30283c


// Variables
//========================================

var authKey = "4c6db12a69f5430ab711c81b1e30283c"
var urlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

var articleCounter = 0;

// Functions
//========================================

function runQuery(numArticles, queryURL) {

    // AJAX function
    $.ajax({ url: queryURL, method: "GET" })
        .done(function(NYTData) {
            console.log(NYTData);
        })
}

// Magic Happenes Here
//========================================

$('#searchBtn').on('click', function() {
    
	queryTerm = $('#search').val().trim();
	console.log(queryTerm);

	var newURL = urlBase + "&q=" + queryTerm;
	console.log(newURL);

    runQuery(10, newURL);

    return false;
})