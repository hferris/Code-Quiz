	var quiz = [
	var score = 0;



	{
		question: 'What is a baby rabbit called?',
		choices: ['Puppy','Calf', 'Kit', 'Fawn'],
		answer: 'Kit'
	},
	{
		question: 'What is a baby rabbit called?',
		choices: ['Puppy','Calf', 'Kit', 'Fawn'],
		answer: 'Kit'
	},
	{
		question: 'What is a baby rabbit called?',
		choices: ['Puppy','Calf', 'Kit', 'Fawn'],
		answer: 'Kit'
	},
	{
		question: 'What is a baby rabbit called?',
		choices: ['Puppy','Calf', 'Kit', 'Fawn'],
		answer: 'Kit'
	},
    {
		question: 'What is a baby rabbit called?',
		choices: ['Puppy','Calf', 'Kit', 'Fawn'],
		answer: 'Kit'
	}
]


document.querySelector('#question').innerText = [indexOfQuestionToShow].question
// console.log(quiz[0].question);
document.querySelector('#next').addEventListener('click', function(){
	indexOfQuestionToShow ++ 
	if(indexOfQuestionToShow >= quiz.length){
		alert('game over')
		return
	}
	document.querySelector('#question').innerText = quizArray[indexOfQuestionToShow].question
})






//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score
