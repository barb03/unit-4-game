$(document).ready(function() {

	var ranNum = [];           //random 
    var crystals = [];       //crystals array
    var randNumber;          // number to match
	var crystalNumbers = []; // for array of random crystal values
	var diamond;
	var emerald;
	var ruby;
	var amethyst;
    var totalScore = 0;      // user total score
	var wins = 0;            //win score
	var losses = 0;          //loss score

	$("#endScreen").toggle();             //to toggle end screen hidden and display

	for (var i = 19; i < 121; i++) {     //random number to match between 19 and 121
		ranNum.push(i);
	}  //end for random

	for (var j = 1; j < 13; j++) {      //random number for crystals between 1 and 13
		crystals.push(j);
	}  //end for crystals
	
	function pickRandomNumber(arr) {   //function to get random number to match
		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);
	} //end function random number

	function pickRandomCrystals(arr) {  //function to get random number for crystals
		for (var y = 0; y < 4; y++){
			var a = arr[Math.floor(Math.random() * arr.length)];
			crystalNumbers.push(a);
		}
    } //end function crystal number
    
	function crystalValues(arr) {	    //function crystal values	
		for (i = 0; i < arr.length; i++) {
		$("#button-" + (i+1)).attr("value", arr[i]);		
		}  //end for 
		diamond = arr[0];
		emerald = arr[1];
		ruby = arr[2];
		amethyst = arr[3];
	} //end function crystal
	
	pickRandomNumber(ranNum);            //call functions
	pickRandomCrystals(crystals); 
	crystalValues(crystalNumbers);
	
	$("#btnReplay").on("click", function() {	//replay end screen onclick	
		$("#endScreen").hide();
		reset();
	});
		
	$("#diamond").on("click", function() {     //diamond onclick
		totalScore += diamond;
		$("#totalNumber").html(totalScore);
	});  //end diamond

	$("#emerald").on("click", function() {     //emerald onclick
		totalScore += emerald;
		$("#totalNumber").html(totalScore);
	});  //end emerald

	$("#ruby").on("click", function() {        //ruby onclick
		totalScore += ruby;
		$("#totalNumber").html(totalScore);
	});  //end ruby

	$("#amethyst").on("click", function() {    //amethyst onclick
		totalScore += amethyst;
		$("#totalNumber").html(totalScore);
	});  //end amethyst

	$(".gem").on("click", function() {         //wins
		    	
		if (totalScore == randNumber) {       //total score win
			wins++;			
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);
			$("#endScreen").toggle();
			$("h2").html("YOU WIN!");			
			$("h3").html("Computer loses");			
		}  //end win

		else if (totalScore > randNumber){        //total score losses
			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);
			$("#endScreen").toggle();
			$("h2").text("YOU LOST!!");
			$("h3").html("Computer wins");			
		}  //end loss
	});  //end function game

	function reset() {                           //function reset
		crystalNumbers = [];           
		pickRandomNumber(ranNum);
		pickRandomCrystals(crystals);
		crystalValues(crystalNumbers);
		totalScore = 0;
		$("#totalNumber").html(totalScore);				
		$("#endContent").show();						
	} //end function reset

}); // end of script