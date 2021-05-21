//Set random location between 0 and 4 
var randomLoc = Math.floor(Math.random() * 5);

//Set location of ships
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

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
    if ( guess < 0 || guess > 6 ){
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
        //Check to see if locations are hit && increment hits variable if true
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;
            //Check to see if you ship has been sunk
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            } 
        } else {
            alert("MISS");
        }
    }
}
   
//Disply stats to the user
var stats = `You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was 3/${guesses}`;
alert(stats);