//Class 1:
// Fork and clone the repo and set up your project workspace and link files
// Write HTML for your project
//Class 2:  
// Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
// Practice using console.log() and debugger to debug your code
// Create your document ready function. 
// Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
// Display the user choice to the output screen
//Class 3:  
// Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
// Display the computer choice to the output screen
// Compare the user choice and the computer choice to determine who won. 
// Display the user winner to the output screen 
// Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS



// DOCUMENT READY FUNCTION

var options = [ "earth", "water", "fire", "air"]



$(document).ready(function() {
        $("#submit-element").click(function() {
                var userchoice = $("#element").val();
                $("#choice").text(userchoice);
                
var opponent= Math.floor(Math.random()*4)

var computerchoice= options[opponent]
$("#computer-choice").text(computerchoice);

if (userchoice === "earth" && computerchoice === "earth"){
        alert("Draw")
}
else if (userchoice === "earth" && computerchoice === "air"){
        alert("Computer Wins")
}
else if (userchoice === "earth" && computerchoice === "fire"){
        alert("User Wins")
}
else if (userchoice === "earth" && computerchoice === "water"){
        alert("Computer Wins")
}
else if (userchoice === "fire" && computerchoice === "fire"){
        alert("Draw")
}
else if (userchoice === "fire" && computerchoice === "air"){
        alert("User Wins")
}
else if (userchoice === "fire" && computerchoice === "earth"){
        alert("Computer Wins")
}
else if (userchoice === "fire" && computerchoice === "water"){
        alert("Computer Wins")
}
else if (userchoice === "water" && computerchoice === "water"){
        alert("Draw")
}
else if (userchoice === "water" && computerchoice === "earth"){
        alert("User Wins")
}
else if (userchoice === "water" && computerchoice === "fire"){
        alert("User Wins")
}
else if (userchoice === "water" && computerchoice === "air"){
        alert("Computer Wins")
}
else if (userchoice === "air" && computerchoice === "air"){
        alert("Draw")
}
else if (userchoice === "air" && computerchoice === "earth"){
        alert("User Wins")
}
else if (userchoice === "air" && computerchoice === "fire"){
        alert("Computer Wins")
}
else if (userchoice === "air" && computerchoice === "water"){
        alert("User Wins")
}
        });

});