// Challenge 3: Rock Paper Scissors
// if you wanna go into 'this' deep look at JavaScript Object Oriented Programming
// // Rough expression
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    // alert(botChoice);
    console.log('Computer choice:', botChoice);
    //Math.floor(Math.random() *3); print number from 0 to 1 randomly
    // ['rock', 'paper', 'scissors'] [0]
    // ['rock', 'paper', 'scissors'] [1]
    // ['rock', 'paper', 'scissors'] [2]
    // OR
    // ['rock', 'paper', 'scissors'] [Math.floor(Math.random() *3)]

    results = decideWinner(humanChoice, botChoice); //[0, 1] human lost | bot won
    console.log(results);

    message = finalMessage(results);
    console.log(message);
    //dictionary or object {'message': 'You won!', 'color': 'green'}

    rpsResult(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsChances = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    };

    var yourScore = rpsChances[yourChoice][computerChoice];
    var computerScore = rpsChances[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore == 0) {
        return { 'message': 'You Lost!', 'color': 'red' };
    }
    else if (yourScore == 0.5) {
        return { 'message': 'Match Tied', 'color': 'yellow' };
    }
    else {
        return { 'message': 'You Won!', 'color': 'green' };
    }
}

function rpsResult(humanChoiceImage, botChoiceImage, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanChoiceImage] + "' height=300 width=200 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botChoiceImage] + "' height=300 width=200 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('box-rps-div').appendChild(humanDiv);
    document.getElementById('box-rps-div').appendChild(messageDiv);
    document.getElementById('box-rps-div').appendChild(botDiv);
}