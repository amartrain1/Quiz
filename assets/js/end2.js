var finalScoreText = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');
var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');

var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const maxHighScores = 5;
// console.log(highScores);

finalScoreText.textContent = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log('clicked the save button!');
    e.preventDefault();

    var score = {
        // score: Math.floor(Math.random() * 100),
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    console.log(highScores);

    highScores.sort( (a,b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');

    console.log(highScores);
};
