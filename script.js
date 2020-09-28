// Challange 1
function getDay() {
  let birthYear = prompt('What year were you born in?');
  let date = new Date();
  let currentYear = date.getFullYear();
  let indays = (currentYear - birthYear) * 365;
  let h4 = document.createElement('h4');
  let msg = document.createTextNode(`You are ${indays} days old.`);
  h4.appendChild(msg);
  document.querySelector('#display').appendChild(h4);
  document.querySelector('.display').style.display = 'block';
}
function reset() {
  //   document.querySelector('#display').remove();
  //   document.querySelector('.display').style.display = 'none';
  location.reload();
}

// Challange 2
function getCat() {
  let img = document.createElement('img');
  const display2 = document.querySelector('#display2');
  img.src = 'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif';
  img.alt = 'Cat gif';
  display2.appendChild(img);
}

//Challange 3

function getAction(human_hand) {
  let bot_hand = ['rock', 'paper', 'scissor'];
  let bot_choose = parseInt(Math.random() * bot_hand.length);
  let result_value = gameResult();
  let img1 = document.createElement('img');
  let img2 = document.createElement('img');
  let h3 = document.createElement('h3');
  let img0 = (img1.src = `${result_value[0]}.png`);
  let img = (img2.src = `${result_value[2]}.png`);
  let result = document.querySelector('#result');
  let interact2 = document.querySelector('#interact2');
  function gameResult() {
    if (
      (bot_hand[bot_choose] == 'rock' && human_hand == 'paper') ||
      (bot_hand[bot_choose] == 'paper' && human_hand == 'scissor') ||
      (bot_hand[bot_choose] == 'scissor' && human_hand == 'rock')
    ) {
      return [bot_hand[bot_choose], 'YOU WIN!!', human_hand];
    } else if (bot_hand[bot_choose] == human_hand) {
      return [bot_hand[bot_choose], 'DRAW', human_hand];
    } else {
      return [bot_hand[bot_choose], 'YOU LOSE!!', human_hand];
    }
  }
  let color = (h3.textContent = `${result_value[1]}`);
  result.appendChild(img1);
  result.appendChild(h3);
  result.appendChild(img2);
  result.style.display = 'flex';
  interact2.style.display = 'none';
  if (color == 'YOU WIN!!') {
    h3.setAttribute('class', 'text-primary');
  } else if (color == 'YOU LOSE!!') {
    h3.setAttribute('class', 'text-danger');
  } else {
    h3.setAttribute('class', 'text-warning');
  }
}

// Challange 4
let all_buttons = document.getElementsByTagName('button');

let copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

function getBtnColor(btnthing) {
  if (btnthing.value === 'red') {
    btnRed();
  } else if (btnthing.value === 'green') {
    btnGreen();
  } else if (btnthing.value === 'random') {
    btnRandom();
  } else if (btnthing.value === 'reset') {
    btnReset();
  }
}
function btnRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}
function btnGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}
function btnReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}
function btnRandom() {
  let colorChoice = [
    'btn-primary',
    'btn-secondary',
    'btn-success',
    'btn-danger',
    'btn-warning',
    'btn-info',
    'btn-light',
    'btn-dark',
  ];
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(colorChoice[parseInt(Math.random() * 8)]);
  }
}

//Challange 5
