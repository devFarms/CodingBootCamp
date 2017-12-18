var wordBank = [ "ollie", "kickflip", "method", "caballaerial", "sadplant" ];

// press any key to begin - press any key to start program or to execute function
    // select word from array

    var hangWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(hangWord);
    // loop through letters to generate a dash for each
    // Determine how many letters in selcted variable "hangWord"
    // var asteriks = hangWord.length;
    // console.log(asteriksNeeded);
    var asteriks;
    var asterik = [];
    
    for (var i = 0; i < hangWord.length; i++) {
        asterik[i] = " * "; // Creates and asterik for each letter in the loop.
    };
    
    for (var i = 0; i < hangWord.length; i++) {
        console.log(hangWord[i]);
    };
    asteriks = asterik.join("    ");
    document.getElementById("asteriks-needed").innerHTML = asteriks;
    console.log(asteriks);
    // run event when a letter is typed 
    document.onkeyup = function() {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);
        document.getElementById("match-attempts").innerHTML = userGuess;
        // var hangwordTwo = hangWord;
        // console.log(hangwordTwo + "hangwordTwo");
        for (var i = 0; i < hangWord.length; i++){
        	if (userGuess === hangWord[i]){
        		// alert("Match")
        	document.getElementsByClassName(hangWord[i]).innerHTML = userGuess;
        	} else alert("No Match")
        };
    };