'use strict';

//*SET GAME LOGIC TIMER
let minutes = 0; // starting number of minutes
let seconds = 59; // starting number of seconds
let totalSeconds = minutes * 60 + seconds;
let tempSeconds = totalSeconds;

const convert = (value, inSeconds) => {
  if (value > inSeconds) {
    let x = value % inSeconds;
    tempSeconds = x;
    return (value - x) / inSeconds;
  } else {
    return 0;
  }
};

//*sets seconds
let setSeconds = s => {
  document.querySelector('.seconds').textContent = s + 's';
};

//*sets minutes
const setMinutes = m => {
  document.querySelector('.minutes').textContent = m + 'm';
};
//*Update the count down every 1 second
var x = setInterval(() => {
  //clears countdown when all seconds are counted
  if (totalSeconds <= 0) {
    clearInterval(x);
  }

  setMinutes(convert(tempSeconds, 60));
  setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
  totalSeconds--;
  tempSeconds = totalSeconds;
}, 1000);
setTimeout(function () {
  displayMessage(' 💥You lost the game!');
  document.querySelector('body').style.backgroundColor = 'darkred';
  document.querySelector('.right').style.backgroundColor = 'darkred';
}, 60000);
setTimeout(function () {
  document.querySelector('.countdown').style.color = 'darkred';
}, 50400);

//*Set default values

//*input1
let box1 = document.querySelector('.input1').value;
//*input 2
let box2 = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.input2').textContent = box2;

//*Secret number--------------->
const min = 25;
const max = 100;

function generateRandom(min = 25, max = 100) {
  // find diff
  let difference = max - min;

  // ^generate random number
  let rand = Math.random();

  //^multiply with difference
  rand = Math.floor(rand * difference);

  //^ add with min value
  rand = rand + min;

  return rand;
}
let secretNumber = generateRandom();

document.querySelector('.result').textContent = secretNumber;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//* GAME LOGIC
var score = 3;
var highscore = 0;
document.querySelector('.highscore').textContent= highscore;
document.querySelector('.score').textContent = score;
let anyLuck = document
  .querySelector('.number')
  .addEventListener('click', function () {
     
     document.querySelector('.score').textContent = highscore;
    const diff = secretNumber - box2;
    document.querySelector('.input1').value;

    let guess = Number(document.querySelector('.input1').value);
    //console.log(guess, typeof guess);
    //*IF NO NUMBER WAS INPUTED
    if (!guess) {
      displayMessage('⛔No Number!');
       document.querySelector('.right').textContent;
        document.querySelector('.right').style.backgroundColor = 'darkred';
  
      //*IF THE CORRECT NUMBER WAS INPUTTED
    } else if (guess === diff) {
      
      highscore += 2 
      document.querySelector('.highscore').textContent = highscore;
      displayMessage('Correct Number!👏 Next Question');
       document.querySelector('.input1').textContent = diff;
      document.querySelector('body').style.backgroundColor ='#60b347';
      document.querySelector('.result').style.width = '20em';
      document.querySelector('.right').style.backgroundColor = '#60b347';
      let next = document
        .querySelector('.next')
        .addEventListener('click', function () {
          displayMessage("You're almost there...🏃‍♂️⏳")
          document.querySelector('.input1').value = box1;
          box2 = Math.trunc(Math.random() * 20) + 1;
          document.querySelector('.input2').textContent = box2;
          secretNumber = generateRandom();
          document.querySelector('.result').textContent = secretNumber;
          let operate = selectRandomOperator();
          document.getElementsByClassName('operator').textContent = operate;
          document.querySelector('body').style.backgroundColor = '#011627'
          document.querySelector('.right').style.backgroundColor = '#011627';
    
  });
      //^SCORE VALUES WHEN CORRECT NUMBER IS INSERTED

      //*WHEN GUESS IS WRONG
    } else if (guess !== diff) {
      if (score > 0) {
        score--;
        document.querySelector('.score').textContent = score;

        displayMessage('❌Wrong anwser!,Try again😔');
        
        document.querySelector('.right').style.backgroundColor = 'darkred';

      } else {
        displayMessage(' 💥You lost the game!');
        document.querySelector('.score').textContent = score;
        
      }
    }
  });

const selectRandomOperator = () => {
  let oprandArr = ['+', '-', '*'];
  let randomOprand = oprandArr[Math.floor(Math.random() * oprandArr.length)];
  return randomOprand;

  // switch (randomOprand) {
  //   case '+':
  //     if (box1 < box2) return box1 + box2;
  //   case '-':
  //     if (box1 > box2) return box1 - box2;
  //   case '*':
  //     return box1 * box2;
  //   default:
  //     return 'enter a valid number';
};
let operate = selectRandomOperator();

document.getElementsByClassName('operator').textContent = operate;

//*When the NEXT button is clicked

