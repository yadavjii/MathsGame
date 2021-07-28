var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswer;
document.getElementById("startreset").onclick = function (){
    if(playing){
        location.reload();
    }else{
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        showElement("timeremaining");
        timeRemaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
        document.getElementById("startreset").innerHTML = "Reset Game";
        startCountDown();
        generateQuestion();
    }
}


for(var i = 1; i <= 4; i++){
document.getElementById("box"+i).onclick = function(){
    if(playing){
        if(this.innerHTML == correctAnswer){
            score += 1;
            document.getElementById("scorevalue").innerHTML = score;
            hideElement("wrong");
            showElement("correct");
            setTimeout(function(){
                hideElement("correct");
            }, 1000);
            generateQuestion();
        }else{
            hideElement("correct");
            showElement("wrong");
            setTimeout(function(){
                hideElement("wrong");
            }, 1000);
        }
    }
}
}


function startCountDown(){
    action = setInterval(function(){
        timeRemaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
        hideElement("gameover");
        if(timeRemaining == 0){
            stopCountDown();
            showElement("gameover");
            document.getElementById("gameover").innerHTML = "<p>game over</p><p>your score is: "+score +"</p>"
            hideElement("timeremaining");
            hideElement("correct");
            hideElement("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}

function stopCountDown(){
    clearInterval(action);
}

function hideElement(id){
    document.getElementById(id).style.display = "none";
}

function showElement(id){
    document.getElementById(id).style.display = "block";
}

function generateQuestion(){
    var x = Math.round(Math.random() * 9) + 1;
    var y = Math.round(Math.random() * 9) + 1;
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = x+"X"+y;
    var correctPosition = Math.round((Math.random() * 3) + 1);
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
    var answers = [correctAnswer];
    for(var i = 1; i <= 4; i++){
        if(i != correctPosition){
            do{
            var wrongAnswer = Math.round(Math.random()*100);
                console.log(wrongAnswer);
                
            }while(answers.indexOf(wrongAnswer) > -1);
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
     
}