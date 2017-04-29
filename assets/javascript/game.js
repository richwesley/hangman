// JavaScript Document

// Declare Global Variables 

var words = ['stratocaster', 'telecaster', 'blackmore', 'clapton', 'malmsteen'];
var displayWord =[];
var boneYard = [];
var chosenWord ="";
var guess;
var dieYoung = 6;
var wrong = true;
	
//  Process Functions 


// Function to get a word from the array and initialize an array with a _ for each 
// letter in the word 
	function getWord () {
		chosenWord = words[Math.floor(Math.random() * words.length)];
		for (var i = 0; i < chosenWord.length; i++) {
		displayWord.push("_");			
		}	
	
// initalize all of the variables for the game and display blanks and stats
	
	dieYoung = 6;
	boneYard = [];
	
		
	document.getElementById("word").innerHTML = displayWord.join(" ");	
	document.getElementById("remainigLife").innerHTML = dieYoung;
	

	console.log (chosenWord);
	console.log (chosenWord.length);
	
}	

	
function inspectGuess (letter) {
	wrong = true;
	for (var k=0; k<chosenWord.length; k++){
		if(chosenWord[k] === letter) {
			displayWord[k] = (guess);
			document.getElementById("word").innerHTML = displayWord.join(" ");
			wrong = false;
			}
		 
		}
							
		if(wrong===true)	{	
				dieYoung = dieYoung - 1;
				boneYard.push(guess);
				document.getElementById("remainigLife").innerHTML = dieYoung;
				document.getElementById("boneyard").innerHTML = boneYard;
		}

}
			
		
	function checkStatus () {
		console.log(chosenWord + displayWord.join("") + dieYoung + boneYard);
		if(chosenWord == displayWord.join(" ")) {
				alert("you win");
			}
		else if(dieYoung === 0) {
				confirm("Sorry Charlie, Only the Best Tuna! Go Again?");
			} 
		}
	

	
	

	


// Program Logic 			
	
	
	document.onkeyup = function (event) {
		
	guess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
	
	console.log(guess);
	
	inspectGuess(guess);
	checkStatus();
	};	