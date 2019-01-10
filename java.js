$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 60,
		reset: function() {
			this.time = 60;
			$('.timer').html('<h3>' + this.time + ' time remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
				
			if (countdownTimer.time >= 0) {
				$('.timer').html(countdownTimer.time + ' time remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Corgis are the ________ smartest dog breed as ranked by psychology professor Stanley Coren',
	potentialAnswers : ['A. 11th',
				 'B. 1st',
				 'C. 5th',
				 'D. 16th'],
	
	answer : 'A. 11th'
};

var q2 = {
	question: 'How many corgis did Queen Elizabeth have??',
	potentialAnswers: ['A. 12',
				 'B. 30',
				 'C. 9.5',
				 'D. 14'],
	
	answer : 'B. 30'
};

var q3 = {
	question : 'corgis are abnormally fast',
	potentialAnswers : ['A. learners',
				 'B. runners',
				 'C. thinkers',
				 'D. Jet Skiiers'],
	
	answer : 'B. runners'
};

var q4 = {
	question : 'corgis are were originally bred to be ________',
	potentialAnswers : ['A. hunters',
				 'B. herders',
				 'C. house pets',
				 'D. therapists'],
	
	answer : 'B. Herders'
};

var q5 = {
	question : 'How old did the oldest corgi live to be?',
	potentialAnswers : ['A. 46',
				 'B. 27',
				 'C. 29',
				 'D. 34'],
	
	answer : 'B.27'
};

var q6 = {
	question : 'How long is the average corgi tail?',
	potentialAnswers : ['A. 2 inches',
				 'B. 0 inches',
				 'C. 12 inches',
				 'D.3 inches'],
	
	answer : 'B. inches'
};

var q7 = {
	question : 'How far can we trace back the existence of corgis',
	potentialAnswers : ['A. 200 years',
				 'B. 700 years',
				 'C. 1000 years',
				 'D. 300 years'],

	answer : 'C. 1000 years'
};

var q8 = {
	question : 'Corgis can be traced back most closely to which other dog breed?',
	potentialAnswers : ['A. Husky',
				 'B. Pugs',
				 'C. Golden Retrivers',
				 'D. French Bulldogs'],

	answer : 'A. Husky'
};

var q9 = {
	question : 'Corgis could die if they eat',
	potentialAnswers : ['A. Bees',
				 'B. Eggs',
				 'C. Gluten',
				 'D. Grapes'],
	
	answer : 'D. Grapes'
};

var q10 = {
	question : 'Corgi is Welsch for ________',
	potentialAnswers : ['A. Dwarf Dog',
				  'B. Loaf Dog',
				  'C. Pineapple Cheesecake',
				  'D. Low Dog'],

	answer : 'B. Designing US Army & US Navy insignia'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].potentialAnswers[0]);
  $("#buttonB").text(questionArray[questionSelection].potentialAnswers[1]);
  $("#buttonC").text(questionArray[questionSelection].potentialAnswers[2]);
  $("#buttonD").text(questionArray[questionSelection].potentialAnswers[3]);

}


function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {


	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text();
		$("#buttonA").text();
		$("#buttonB").text();
		$("#buttonC").text();
		$("#buttonD").text();
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Corg-rect!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("In-corg-rect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append(correct + " correct");
	$('.question').append( wrong + " incorrect");
	

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text();
 $("#buttonA").text();
 $("#buttonB").text();
 $("#buttonC").text();
 $("#buttonD").text();
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});