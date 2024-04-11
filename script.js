const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const p1score = document.getElementById("p1score");
const p2score = document.getElementById("p2score");

let player1score = 0;
let player2score = 0;

const scoreboard = document.getElementById("scoreboard");
const results = document.getElementById("results");
const options = document.getElementById("options");
const turn = document.getElementById("turn");





// functions**********************

function getPlayer2Option() {
    const player2options = ['rock', 'paper', 'scissors'];
    const value = (Math.floor(Math.random() * 3));
    return player2options[value];

}

function play(player1Options) {
    const player2Options = getPlayer2Option();

    switch (player1Options + player2Options) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            p1wins();
            break

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            p2wins();
            break

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            Draw();
            break
    }

}


function p1wins(player1Option, player2Option) {
    player1score++;
    p1score.innerHTML = player1score;
    results.innerHTML =`Player 1 wins!!`;
    document.getElementById("player2Options").classList.add("green");
}

function p2wins(player1Option, player2Option) {
    player2score++;
    p2score.innerHTML = player2score;
    results.innerHTML =`Player 2 wins!!`;
    
    
    
}

function Draw() {
    results.innerHTML =`Players Draw!!`;

}


function gameplay() {

    rock.addEventListener('click', () => {
        play("rock")

    });
    paper.addEventListener('click', () => {
        play("paper")


    });
    scissors.addEventListener('click', () => {
        play("scissors")


    });
}

gameplay();






