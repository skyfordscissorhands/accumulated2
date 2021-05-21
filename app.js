

//  1

// Here we ask the user if they eat fish, and store the result (true/false) in a variable.

var eatFish= prompt("Do you eat fish?"); 

// If the user eats fish (eatFish === true) doument.write, "Fish is rich in B12".
if (eatFish === true) {
    document.write ("true");
}
else {
    document.write ("false"); 
}

// If the above condition isn't met (eatFish !== true), doument.write, "You must be a meateater".


// 2
// Ask the user what year they were born, and store their response to a variable.

var age= prompt("What year were you born?");
// If the user was born before 1997, alert "You are in Generation Z"
            if(age <= 1997){
                alert("You are in Generation Z");
            }else if (age >1997){
                alert("You are a millennial!");
            }else if (age === 1995){
                alert ("You inched by!");
            };
//  // Else if the user was born after 1997, alert "You are a millennial!"

// If neither of the previous conditions was true (birthYear === 1995) we alert "You inched by!"



// 3//

// Create an array called  animals.
 var animals= ["bird", "cat", "dog", "hamster", "turtle", "fish"];  
// // // Log the length of the  animals array to the document
console.log(animals.length);

// // // Log an animal in the cat.
// var 

// // Log the animal dog.

// console.log(animals[2]);
// // Log the animal bird.
// console.log(animals[0];)

// // Log the animal[13]. //what result do you get
// animals[13];
// console.log(animals[13]);

// Add an new animal to the [2] position of the array with out changing the array



//4//

// Created an array named myBands.
var myBands = ["Fruit Bats", "David Bowie", "Queen"];
// Created a prompt to get the user's favorite band.
var userFavorite = prompt('What is your favorite band?');
// Converts the user's answer to lowercase.
var userFavoriteLower = userFavorite.toLowerCase();

// Now we check the myBands array to see if it contains the user's answer.
// If the user's band is not in the array...
if (myBands.indexOf(userFavoriteLower) === -1) {
    alert("Not my favotite");

 }else {
     alert("I love them too!!");
 };

    // If it is in the array...


    //5//

    // song-object
    // Create a constructor function called Song. Song should take in two arguments, title and artist, which should both be added as properties when the Song constructor function is used. The Song function should also have a method called play on its prototype. When called, the play function should console.log the name of that specific song preceded by the word 'Playing:'.
    // function should also have a method called play on its prototype. When called, the play function should console.log the name of that specific song preceded by the word 'Playing:'.
function Song (title, artist){

        this.title = title;
        this.artist = artist;
}
    Song.prototype.play = function () {
        console.log( this.title + " Playing");
    };

    var song = new Song("The Bottom of It", "Fruit Bats");
    song.play();
    var song = new Song("The Origin of Love", "Stephen Trask");
    song.play();
    


/*6//
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them.

// // Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)

NOTE: always look at the test results to see further details about what the test is expecting.
For example, the tests require that to complete this challenge, your function must return
0 if the input is empty. Please see the README file for an explanation of how to expand the test
results on the index page in the browser.
*/









//7/*
// ----------------------------------------
// CHALLENGE
// ----------------------------------------

// Write function named doubleLetters that will take a string and double every letter in the string

// Example: if you pass it "abc" then it should return "aabbcc"
// */




/*8//
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

// Example: if you pass it [1,2,3] then it should return [2,4,6]
*/