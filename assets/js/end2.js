var finalScoreText = document.querySelector('#finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');
var username = document.querySelector('#username');
var saveScoreBtn = document.querySelector('#saveScoreBtn');

var highScoreList = JSON.parse(localStorage.getItem('highScores')) || [];

const maxHighScores = 5;

finalScoreText.textContent = mostRecentScore;

saveScores = () => {
    username.addEventListener('keyup', () => {
        saveScoreBtn.disabled = !username.value;
    });
    e.preventDefault();
    var scoreList = {
        score: mostRecentScore,
        name: username.value,
    };
    
}

saveHighScore = (e) => {
    e.preventDefault();

    var score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScoreList.push(score);
    highScoreList.sort((a, b) => b.score - a.score);
    highScoreList.splice(maxHighScores);

    localStorage.setItem('highScores', JSON.stringify(highScoreList));
    return window.location.href = 'index.html';
};