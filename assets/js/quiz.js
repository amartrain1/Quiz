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

var answerList = ['George Washington', 'John Adams', 'Thomas Jefferson', "James Madison", 'James Monroe', 'John Quincy Adams', 'Andrew Jackson', 'Martin Van Buren', 'William Henry Harrison', 'John Tyler', 'James K. Polk', 'Zachary Taylor', 'Millard Fillmore', 'Franklin Pierce', 'James Buchanon', 'Abraham Lincoln', 'Andrew Johnson', 'Ulysses S. Grant', 'Rutherford B. Hayes', 'James Garfield', 'Chester A. Arthur', 'Grover Cleveland', 'Benjamin Harrison', 'Grover Cleveland', 'William McKinley', 'Theodore Roosevelt', 'William Howard Taft', 'Woodrow Wilson', 'Warren G. Harding', 'Calvin Coolidge', 'Herbert Hoover', 'Franklin D. Roosevelt', 'Harry S. Truman', 'Dwight D. Eisenhower', 'John F. Kennedy', 'Lyndon B. Johnson', 'Richard M. Nixon', 'Gerald R. Ford', 'James Carter', 'Ronald Reagan', 'George H. W. Bush', 'Bill Clinton', 'George W. Bush', 'Barack Obama', 'Donald Trump', 'Joe Biden'];

getChoice = () => {
    // var validAnswers = answerList.splice(num, 1);
    var number = Math.floor(Math.random() * answerList.length);
    var choice = answerList[number];
    // var newAnswerList = answerList.splice(number, 1);
    // console.log(choice);
    return choice;
};

var questions = [
    {
        question: 'Who was the 1st president of the United States?',
        choice1: answerList[0],
        choice2: getChoice(),
        choice3: getChoice(),
        choice4: getChoice(),
        answer: 1,
    },
    {
        question: "Who was the 16th president of the United States?",
        choice1: getChoice(),
        choice2: getChoice(),
        choice3: answerList[15],
        choice4: getChoice(),
        answer: 3,
    },
    {
        question: "Who was the 41st president of the United States?",
        choice1: getChoice(),
        choice2: getChoice(),
        choice3: getChoice(),
        choice4: answerList[40],
        answer: 4,
    },
    {
        question: 'Who was the 18th president of the United States?',
        choice1: answerList[17],
        choice2: getChoice(),
        choice3: getChoice(),
        choice4: getChoice(),
        answer: 1,
    },
    {
        question: 'Who was the 44th president of the United States?',
        choice1: getChoice(),
        choice2: answerList[43],
        choice3: getChoice(),
        choice4: getChoice(),
        answer: 2,
    },
    {
        question: 'Who was the 24th president of the United States?',
        choice1: getChoice(),
        choice2: answerList[23],
        choice3: getChoice(),
        choice4: getChoice(),
        answer: 2,
    },
];

// Constants
const maxQuestions = questions.length;

startTimer = (seconds) => {
    counter = seconds;

    const interval = setInterval(() => {
        counter--;
        timerText.textContent = counter;

        if (counter == 0) {
            clearInterval(interval);
            setTimeout( () => {
                return window.location.assign('file:///C:/Users/alexm/Documents/bootcamp/challenges/challenge-4/end2.html');
            }, 1000);
        };
    }, 1000);
};

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    startTimer(60);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        score = counter;
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('file:///C:/Users/alexm/Documents/bootcamp/challenges/challenge-4/end2.html');
    };
    questionCounter++;
    questionCounterText.innerText = questionCounter + '/' + maxQuestions;
    
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach ( choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion ['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
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
        }, 1000);
    });
});

startGame();
