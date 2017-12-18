// Instructions

// Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

// Start out by creating a constructor function called "Player" with the following properties and methods...

// name: Property which contains the player's name
// position: Property which holds the player's position
// offense: Property which is a value between 1 and 10 to show how good this player is on offense
// defense: Property which is a value between 1 and 10 to show how good this player is on defense
// goodGame: Method which increases either the player's offense or defense property based upon a coinflip.
// badGame: Method which decreases either the player's offense or defense property based upon a coinflip.
// printStats: Method which prints all of the player's properties to the screen
// Now create a program which allows the user to create 8 unique players; 5 starters and 3 subs. It should take as user input the name, position, offense, and defense of each player.

// Once all of the players have been created, print their stats.

//-----

// dependency for inquirer npm package
// var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
      this.name = name;
      this.position = postition;
      this.offense = offense;
      this.defense = defense;
  }
var coinFlip = "";
var coin = ["Heads", "Tails"];
  
function flip(){
    var coinFlip = coin[Math.floor(Math.random()*coin.length)];
    console.log(coinFlip);
}
flip();

Player.prototype.goodGame = function(){
    if (coinFlip === "Heads"){
        // goodGame += 5;
        console.log("You added 5 points");
    }
  }

Player.prototype.badGame = function(){
    if (coinFlip === "Tails"){
        // goodGame += -5;
        console.log("You lost 5 points");
    }
  }

// // creates the printInfo method and applies it to all player objects
// Player.prototype.printStats = function() {
//     console.log("Name: " + this.name + "\nPosition: " + this.position +
//     "\nOffense: " + this.offense + "\ndefense: " + this.defense);
//   };