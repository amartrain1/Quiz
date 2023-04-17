var highScoresList = document.getElementById('highScoresList');
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

var highScoreItems = '';
for (var i = 0; i < highScores.length; i++) {
    const score = highScores[i];
    highScoreItems += '<li class="high-score">' + score.name + ' - ' + score.score + '</li>';
}
highScoresList.innerHTML = highScoreItems;