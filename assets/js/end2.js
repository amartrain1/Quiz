var finalScoreText = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');
var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');

var highScores = JSON.parse(localStorage.getItem('highScores')) || [];


const maxHighScores = 5;

finalScoreText.textContent = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

// run this code on click of save button
saveScoreBtn.addEventListener('click', function() {
    e.preventDefault();

    var score = {
    score: mostRecentScore,
    name: username.value,
    };

    highScores.push(score);
    console.log(highScores);

    highScores.sort( (a,b) => {
        return b.score - a.score;
    })

    localStorage.setItem('highScores', JSON.stringify(highScores));
    return window.location.href = 'highscores.html';
});
