'use strict';

// Questions
let question01 =
  'First Question: Do you think I\'ve ever travelled outside of the country?';
let question02 =
  'Second Question: Sticking with the traveling theme do you think it\'s true that I have visited all 50 states in the US?';
let question03 = 'Third Question: Do I play video games?';
let question04 = 'Fourth Question: Have I ever prepared a bowl of ramen?';
let question05 = 'Fifth and Final Question: Do I do much DIY?';

// Responses
let response01 =
  'I\'ve travelled to Japan many times and I studied Japanese language in college, but my language skills are mediocre at best. My two kiddos have dual citizinship and speak Japanese fluently though.';
let response02 =
  'I\'ve only traveled to 28 states but I did take a Greyhound bus from Seattle to NYC when I was 18.';
let response03 =
  'I got my NES when I was about 5 and haven\'t stopped since. Lately I\'ve been getting back into retro games on my MiSTer FPGA.';
let response04 =
  'I found a really great recipe and make it from scratch (noodles, chashu, broth and all) about once a month.';
let response05 =
  'I\'ve replaced most of the windows in our house; installed new cabnetry in the kitchen; installed hardwood floors; and built a deck out back.';

// Begin Popup City
let visiterName = prompt(
  'Welcome to my \'About Me\' page. My name is Ben Mills. Please let me know your name: '
);
let introMessage =
  'Hello ' +
  visiterName +
  ', please participate in this breif 5 question guessing game. Answers can be in yes/no or y/s form.';

// First Question
let answer01 = prompt(introMessage + '\n\n' + question01);
if (answer01.toLowerCase() === 'y' || answer01.toLowerCase() === 'yes') {
  // console.log("Correct! " + response01 + ".");
  alert('Correct! ' + response01 + '.');
} else if (answer01.toLowerCase() === 'n' || answer01.toLowerCase() === 'no') {
  // console.log("Incorrect, actually " + response01 + ".");
  alert('Incorrect, actually ' + response01 + '.');
} else {
  // console.log("Sorry I didn't get that." + answer01);
  alert('Sorry I didn\'t get that.' + answer01);
}

// Second Question
let answer02 = prompt(question02);
if (answer02.toLowerCase() === 'n' || answer02.toLowerCase() === 'no') {
  // console.log("Correct! " + response02);
  alert('Correct! ' + response02);
} else if (answer02.toLowerCase() === 'y' || answer02.toLowerCase() === 'yes') {
  // console.log("Incorrect, actually " + response02);
  alert('Incorrect, actually ' + response02);
} else {
  // console.log("Sorry I didn't get that.");
  alert('Sorry I didn\'t get that.');
}

// Third Question
let answer03 = prompt(question03);
if (answer03.toLowerCase() === 'y' || answer03.toLowerCase() === 'yes') {
  // console.log("Correct! " + response03);
  alert('Correct! ' + response03);
} else if (answer03.toLowerCase() === 'n' || answer03.toLowerCase() === 'no') {
  // console.log("Incorrect, actually " + response03);
  alert('Incorrect, actually ' + response03);
} else {
  // console.log("Sorry I didn't get that.");
  alert('Sorry I didn\'t get that.');
}

// Fourth Question
let answer04 = prompt(question04);
if (answer04.toLowerCase() === 'y' || answer04.toLowerCase() === 'yes') {
  // console.log("Correct! " + response04);
  alert('Correct! ' + response04);
} else if (answer04.toLowerCase() === 'n' || answer04.toLowerCase() === 'no') {
  // console.log("Incorrect, actually " + response04);
  alert('Incorrect, actually ' + response04);
} else {
  // console.log("Sorry I didn't get that.");
  alert('Sorry I didn\'t get that.');
}

// Fifth Question
let answer05 = prompt(question05);
if (answer05.toLowerCase() === 'y' || answer05.toLowerCase() === 'yes') {
  // console.log("Correct! " + response05);
  alert('Correct! ' + response05);
} else if (answer05.toLowerCase() === 'n' || answer05.toLowerCase() === 'no') {
  // console.log("Incorrect, actually " + response05);
  alert('Incorrect, actually ' + response05);
} else {
  // console.log("Sorry I didn't get that.");
  alert('Sorry I didn\'t get that.');
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
