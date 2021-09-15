'use strict';

// Questions
let questions = [
  'First Question: Do you think I\'ve ever travelled outside of the country?',
  'Second Question: Sticking with the traveling theme do you think it\'s true that I have visited all 50 states in the US?',
  'Third Question: Do I play video games?',
  'Fourth Question: Have I ever prepared a bowl of ramen?',
  'Fifth and Final Question: Do I do much DIY?',
];

// Responses
let responses = [
  'I\'ve travelled to Japan many times and I studied Japanese language in college, but my language skills are mediocre at best. My two kiddos have dual citizinship and speak Japanese fluently though.',
  'I\'ve only traveled to 28 states but I did take a Greyhound bus from Seattle to NYC when I was 18.',
  'I got my NES when I was about 5 and haven\'t stopped since. Lately I\'ve been getting back into retro games on my MiSTer FPGA.',
  'I found a really great recipe and make it from scratch (noodles, chashu, broth and all) about once a month.',
  'I\'ve replaced most of the windows in our house, installed new cabnetry in the kitchen, installed hardwood floors, and built a deck out back.',
];

let answers = [true, false, true, true, true];

// Begin Popup City
let visiterName = prompt(
  'Welcome to my \'About Me\' page. My name is Ben Mills. Please let me know your name: '
);
let introMessage =
  'Hello ' +
  visiterName +
  ', please participate in this breif 5 question guessing game. Answers can be in yes/no or y/s form.';

for (let i = 0; i < questions.length; i++) {
  let answer = null;
  if (i === 0) {
    answer = prompt(introMessage + '\n\n' + questions[i]);
  } else {
    answer = prompt(questions[i]);
  }
  if (answers[i] === true) {
    switch (answer.toLowerCase()) {
    case 'y':
      alert('Correct! ' + responses[i] + '.');
      break;
    case 'n':
      alert('Incorrect, actually ' + responses[i] + '.');
      break;
    case 'yes':
      alert('Correct! ' + responses[i] + '.');
      break;
    case 'no':
      alert('Incorrect, actually ' + responses[i] + '.');
      break;
    default:
      console.log('Sorry I didn\'t catch that.');
    }
  } else if (answers[i] === false) {
    switch (answer.toLowerCase()) {
    case 'y':
      alert('Incorrect, actually ' + responses[i] + '.');
      break;
    case 'n':
      alert('Correct! ' + responses[i] + '.');
      break;
    case 'yes':
      alert('Incorrect, actually ' + responses[i] + '.');
      break;
    case 'no':
      alert('Correct! ' + responses[i] + '.');
      break;
    default:
      console.log('Sorry I didn\'t catch that.');
    }
  }
}
//cowsay goodbye alert
alert(
  ' _________________________________________\n/ Thank you for playing my guessing game. \\\n\\ have a good day ' +
    visiterName +
    '.                        /\n -----------------------------------------\n        \\    ^__^\n         \\   (oo)_______\n             (__)\\       )\\/\\\n                ||----w |\n                ||     ||\n  Looks like alerts are not monospace type! Check the console for a slightly better cow'
);
// Log cowsay to the console
console.log(
  ' _________________________________________\n/ Thank you for playing my guessing game. \\\n\\ have a good day ' +
    visiterName +
    '.                   /\n -----------------------------------------\n        \\    ^__^\n         \\   (oo)_______\n             (__)\\       )\\/\\\n                ||----w |\n                ||     ||'
);
