//Set location of ships
var location1 = 3;
var location2 = 4;
var location3 = 5;

//Set guess, hits and guess count - RANDOMIZE LATER!
var guess;
var hits = 0;
var guesses = 0;

//Determine if ship is sunk
var isSunk = false;

//TO DO
/*
- Create a loop to get user guess
- Check user guess
- Check if ship has been sunk
- Display stats to the user
*/

//Create loop to get user guess
while( isSunk == false){
    guess = prompt("Ready, aim, fire! (enter a number 0-6) :");
    //Check user guess
    if (guess < 0 || guess > 6 ){
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
    }
    //Check to see if you ship has been sunk
    if ( guess == location1 || guess == location2 || guess == location3 ){
        hits = hits + 1;
    }
}