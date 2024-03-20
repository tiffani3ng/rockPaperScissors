var scoreboard = { P: 0, C: 0 }; // default scores are zero

function move(pChoice) {
  var possC = ['rock', 'paper', 'scissors']; // possible choices for computer generation
  var cChoice = possC[Math.floor(Math.random() * possC.length)]; // computer makes random choice

  var result; // holds result for user message

  if (pChoice === cChoice) {
    result = "It's a tie...";
  } else if ( // all winning combinations
    (pChoice === 'rock' && cChoice === 'scissors') ||
    (pChoice === 'paper' && cChoice === 'rock') ||
    (pChoice === 'scissors' && cChoice === 'paper')
  ) {
    result = "You win! Great job.";
    scoreboard['P'] += 1; // increment score
    updateScoreboard(); // update score
  } else { // all other combinations
    result = "You lose!! :(";
    scoreboard['C'] += 1; // increment score
    updateScoreboard(); // update score
  }

  document.getElementById('result').innerText = `You selected ${pChoice}, and the computer chose ${cChoice}. ${result}`;
} // end move

function updateScoreboard() {
  document.getElementById('scoreboard').innerText = 'Player: ' + scoreboard['P'] + ' - Computer: ' + scoreboard['C']; // updates HTML element
} // end updateScoreboard

function resetScoreboard() { // reset scoreboard to 'start new game'
  scoreboard = { P: 0, C: 0 };
  updateScoreboard();
} // end resetScoreboard
