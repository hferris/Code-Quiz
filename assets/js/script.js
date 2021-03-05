	var startGameBox = document.querySelector("#startGameBox");
	var highScoresBox = document.querySelector("#highScoresBox");
	var gameOverBox = document.querySelector("#gameOverBox");
	var questionBox = document.querySelector("#questionBox");
	var timerText = document.querySelector("#timerText");
	var response = document.querySelector("#response");
	var choicesBox = document.querySelector("#choices");
	var indexOfQuestionToShow = 0;
	var initialsBtn = document.querySelector("#initialsBtn");
	var timer;
	var timerCount;
	var gameScore = 0;


	var quiz = [

	{
		question: 'Select the true statement?',
		choices: ['prevent default prevents the page from refreshing',
		'you use JSON.stringif(); for string to object', 
		'to link the html to JS you declear html at the top js file.', 
		'js stands for just sleeping'],
		answer: 'prevent default prevents the page from refreshing'
	},
	{
		question: 'What is NaN?',
		choices: ['Number','Value', 'string', 'Not a Number'],
		answer: 'Not a Number'
	},
	{
		question: 'What is the first array index postion?',
		choices: ['one','two', 'zero', 'three'],
		answer: 'zero'
	},
	{
		question: 'What does invoke mean?',
		choices: ['get rid of','stop', 'run', 'include'],
		answer: 'run'
	},
    {
		question: 'Which key word do you need to put the script tag in the head??',
		choices: ['defer','div', 'differ', 'dif'],
		answer: 'defer'
	}
]

function startQuiz(){
	response.visibility = "hidden";
	startGameBox.style.display = "none";
	startGameBox.style.visibility = "hidden";
	questionBox.style.visibility = "visible";

	timerCount = 75;
	timerText.innerText = timerCount;
	makeQuetions();
	startTimer();
}
function startTimer(){
	timer = setInterval(function(){
		timerCount--;
		timerText.innerText = timerCount;
		if(timerCount === 0){
			clearInterval (timer);
		} 
	
	}, 1000);
}

function makeQuetions(){
	if(indexOfQuestionToShow === quiz.length){
		endOfQuiz();
		return;
	}
	choicesBox.innerText = "";
	var question = quiz[indexOfQuestionToShow];
	document.querySelector("#question").innerText = quiz[indexOfQuestionToShow].question;

	question.choices.forEach(function(choice){
		const btn = document.createElement("button");
		btn.innerText = choice;
		
		choicesBox.append(btn);
	});
}
questionBox.querySelector("#choices").addEventListener("click", function(e) {
	if(!e.target.matches("button")) return;

	var val = e.target.innerText;
	
	validateAnswer(val);
})

function endOfQuiz(){
	gameScore = timerCount;
	clearInterval(timer);
	timerText.innerText = gameScore;
	questionBox.style.visibility = "hidden";
	questionBox.style.display = "none"
	gameOverBox.style.visibility = "visible";

	var score = document.querySelector("#score");

	score.innerText = gameScore;

}

function validateAnswer(val){
	var answer = quiz[indexOfQuestionToShow].answer
	var result = false;
	if(val === answer){
		result = true;
	}
	else{
		timerCount -=  5;

	}
	dispalyResponse(result);
	indexOfQuestionToShow++;
	makeQuetions();
}
function dispalyResponse(result){
	if(!result){
		response.style.visibility = "visible";
		response.innerText = "INCORRECT :(";
		console.log("boo");
	}else{
		response.style.visibility = "visible";
		response.innerText = "CORRECT !";
		console.log("yay");
	}
	
}
initialsBtn.addEventListener('click', function setHighSchores() {
	var input = document.querySelector("#initials");
	if(input.value === ""){
		console.log("no val");
		alert("Please make sure to add an input");
		return;
	}
	else {
		var user = {
			initials: input.value,
			score: gameScore
		}
		localStorage.setItem("lastPlayer", user.initials);
		localStorage.setItem("lastScore", user.score);
	}
	displayHighScores();

});

function displayHighScores() {
	gameOverBox.style.visibility = "hidden";
	gameOverBox.style.display = "none";
	highScoresBox.style.visibility = "visible";

	var lastUser = localStorage.getItem("lastPlayer");
	var lastScore = localStorage.getItem("lastScore");
	console.log("we here");
	console.log(lastScore);
	console.log(lastUser);

	const init = document.querySelector("#savedInitials");
	init.innerText = lastUser;
	
	const inScore = document.querySelector("#savedScore");
	inScore.innerText = lastScore;
}


document.querySelector("#startBtn").addEventListener('click', startQuiz);










