var question = document.getElementById('question');
var choices = Array.from(document.getElementsByClassName("choice-text"));
var questionCounterText = document.getElementById('questionCounter');
var timerText = document.getElementById('timer');

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var timeRemaining = 0;
var availableQuestions = [];

var questions = [
    {
        question: 'Who was the 1st president of the United States?',
        choice1: 'George Washington',
        choice2: 'Harry S. Truman',
        choice3: 'John F. Kennedy',
        choice4: 'Bill Clinton',
        answer: 1,
    },
    {
        question: "Who was the 16th president of the United States?",
        choice1: 'Rutherford B Hayes',
        choice2: 'Calvin Coolidge',
        choice3: 'Abraham Lincoln',
        choice4: 'Andrew Jackson',
        answer: 3,
    },
    {
        question: "Who was the 41st president of the United States?",
        choice1: 'Millard Fillmore',
        choice2: 'John Quincy Adams',
        choice3: 'Gerald R Ford',
        choice4: 'George H W Bush',
        answer: 4,
    },
    {
        question: 'Who was the 18th president of the United States?',
        choice1: 'Ulysses S Grant',
        choice2: 'Theodore Roosevelt',
        choice3: 'William Howard Taft',
        choice4: 'William McKinley',
        answer: 1,
    },
    {
        question: 'Who was the 44th president of the United States?',
        choice1: 'Woodrow Wilson',
        choice2: 'Barack Obama',
        choice3: 'Donald Trump',
        choice4: 'Zachary Taylor',
        answer: 2,
    },
    {
        question: 'Who was the 24th president of the United States?',
        choice1: 'Abraham Lincoln',
        choice2: 'Grover Cleveland',
        choice3: 'James Madison',
        choice4: 'Richard Nixon',
        answer: 2,
    },
];

// Constants
const questionsAmount = questions.length;

startTimer = (seconds) => {
    counter = seconds;

    const interval = setInterval(() => {
        counter--;
        timerText.textContent = counter;

        if (counter == 0) {
            clearInterval(interval);
            setTimeout( () => {
                return window.location.href = 'end2.html';
            }, 1000);
        };
    }, 1000);
};

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = questions;
    startTimer(60);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= questionsAmount) {
        score = counter;
        localStorage.setItem('mostRecentScore', score);
        return window.location.href = 'end2.html';
    };
    questionCounter++;
    questionCounterText.innerText = questionCounter + '/' + questionsAmount;
    
    var index = 0
    currentQuestion = availableQuestions[index];
    question.innerText = currentQuestion.question;

    for (var i = 0; i < choices.length; i++) {
        var choice = choices[i];
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
      };

    availableQuestions.splice(index, 1);
    acceptingAnswers = true;
    index++;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) {
            return;
        };
        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number'];
        
        var classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

            if (classToApply === 'incorrect') {
                counter -= 2;
            };

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 500);
    });
});

startGame();
