$(document).ready(function() {

	var rand = [];           //random 
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

	for (var i = 19; i < 121; i++) {
		rand.push(i);
	}  //end for random

	for (var j = 1; j < 13; j++) {
		crystals.push(j);
	}  //end for crystals
	
	function pickRandomNumber(arr) {
		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);
	} //end function random number

	function pickRandomCrystals(arr) {
		for (var y = 0; y < 4; y++){
			var a = arr[Math.floor(Math.random() * arr.length)];
			crystalNumbers.push(a);
		}
    } //end function crystal picker
    
	function crystalValues(arr) {		
		for (i = 0; i < arr.length; i++) {
		$("#button-" + (i+1)).attr("value", arr[i]);		
		}  //end for 
		diamond = arr[0];
		emerald = arr[1];
		ruby = arr[2];
		amethyst = arr[3];
	} //end function crystal

	function reset(x) {
		crystalNumbers = [];           
		pickRandomNumber(rand);
		pickRandomCrystals(crystals);
		crystalValues(crystalNumbers);
		totalScore = 0;
		$("#totalNumber").html(totalScore);
		alert(x);
	} //end function reset

	pickRandomNumber(rand); 
	pickRandomCrystals(crystals); 
	crystalValues(crystalNumbers);
		
		$("#diamond").on("click", function() {
			totalScore += diamond;
			$("#totalNumber").html(totalScore);
		});  //end diamond

		$("#emerald").on("click", function() {
			totalScore += emerald;
			$("#totalNumber").html(totalScore);
		});  //end emerald

		$("#ruby").on("click", function() {
			totalScore += ruby;
			$("#totalNumber").html(totalScore);
		});  //end ruby

		$("#amethyst").on("click", function() {
			totalScore += amethyst;
			$("#totalNumber").html(totalScore);
		});  //end amethyst

	$("button").on("click", function() {		
		if (totalScore == randNumber) {
			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);
			setTimeout(function() {reset("YOU WIN!!")}, 200);
		}  //end win

		else if (totalScore > randNumber){
			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);
			setTimeout(function() {reset("WOMP-WOMP...YOU LOSE!")}, 200);
		}  //end loss
	});  //end function game

}); // end of script