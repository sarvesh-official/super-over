// Strike Button
var strikeButton = document.querySelector("#strike")
//Reset Button
var resetButton = document.querySelector('#reset')

//Score Tags
var team1score_tag = document.getElementById("score-team1")
var team2score_tag = document.getElementById("score-team2")

//Wicket Tags
var team1Wicket_tag = document.getElementById("wicket-team1")
var team2Wicket_tag = document.getElementById("wicket-team2")

//Audio Variables

var strikeAudio = new Audio("http://bit.ly/so-ball-hit")
var gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer")

var team1Score = 0
var team2Score = 0
var team1Wickets = 0
var team2Wickets = 0
var team1BallsFaced = 0
var team2BallsFaced = 0
var turn = 1

var possibleOutcomes = [0, 1, 2, 3, 4, 6, "W"]


strikeButton.addEventListener("click", strikeButtonClicked);

function strikeButtonClicked() {
    //Audio Play
    strikeAudio.pause()
    strikeAudio.currentTime - 0;
    strikeAudio.play()


    //Choosing Random Value
    var randomness = Math.random()
    randomness
    var random1 = randomness * possibleOutcomes.length
    var randomIndex = Math.floor(random1)
    var randomValue = possibleOutcomes[randomIndex]
    

    //Pakistan Bating
    if (turn == 2) {
        team2BallsFaced++
        var ball = document.querySelector(`#team2-superover div:nth-child(${team2BallsFaced})`)
        ball.innerHTML = randomValue

        if (randomValue == "W") {
            team2Wickets++

        } else {
            team2Score += randomValue
        }

        if (team2Score > team1Score || team2Wickets == 2 || team2BallsFaced == 6) {
            turn = 3
            setTimeout(()=> {
                gameOver()
            },100)
        }
        updateScore()
    }
    //India Bating
    if(turn == 1){
        team1BallsFaced++;
        var ball = document.querySelector(`#team1-superover div:nth-child(${team1BallsFaced})`)
        ball.innerHTML = randomValue
    
    //if random element is wicket the increase wicket count by 1 or just add that random value to total score of team-1
        if (randomValue == "W") {
            
            team1Wickets++;
        } else {
            // team1Score = team1Score + randomValue;
            team1Score += randomValue;
        }
        if (team1BallsFaced == 6 || team1Wickets == 2) {
            turn = 2
        }
        updateScore()
    }
}

function updateScore() {
    team1score_tag.innerHTML = team1Score
    team1Wicket_tag.innerHTML = team1Wickets


}
 
function gameOver() {
    document.querySelectorAll(".ball").forEach(kalivum => {
        if (kalivum.innerHTML == "") {
            kalivum.innerHTML = "X"
            kalivum.style.color = "grey"
        }
    })
    gameOverAudio.play()

    if (team1Score >= team2Score) {
        alert("INDIA WINS")
    }
    else if (team2Score >= team1Score) {
        alert("PAKISTAN WINS")
    }
    else {
        alert("MATCH DRAW")
    }
   
  

}    

resetButton.addEventListener('click',resetFunction)
function resetFunction() {
    window.location.reload()
}
