'use strict';

// Questions
let questions = [
  'First Question: Do you think I\'ve ever traveled outside of the country?',
  'Second Question: Sticking with the traveling theme do you think it\'s true that I have visited all 50 states in the US?',
  'Third Question: Do I play video games?',
  'Fourth Question: Have I ever prepared a bowl of ramen?',
  'Fifth and Final Question: Do I do much DIY?',
  'Okay, sorry I know I said it was the last question but how about something else? Try to guess my age.',
  'Alright, alright, last one, I promise! Try to guess one of my favorite Super Nintendo Games (SNES).',
];

// Responses
let responses = [
  'I\'ve traveled to Japan many times and I studied Japanese language in college, but my language skills are mediocre at best. My two kiddos have dual citizenship and speak Japanese fluently though.',
  'I\'ve only traveled to 28 states but I did take a Greyhound bus from Seattle to NYC when I was 18.',
  'I got my NES when I was about 5 and haven\'t stopped since. Lately I\'ve been getting back into retro games on my MiSTer FPGA.',
  'I found a really great recipe and make it from scratch (noodles, chashu, broth and all) about once a month.',
  'I\'ve replaced most of the windows in our house, installed new cabinetry in the kitchen, installed hardwood floors, and built a deck out back.',
];

// Correct answers data
let answers = [
  true,
  false,
  true,
  true,
  true,
  39,
  [
    'super mario world',
    'the legend of zelda a link to the past',
    'super metroid',
    'final fantasy III',
    'final fantasy 3',
    'king arthur\'s world',
    'super street fighter 2',
    'super street fighter II',
    'starfox',
    'super mario kart',
    'super castlevania iv',
    'super castlevania',
    'super castlevania 4',
    'mario paint',
    'simcity',
    'chrono trigger',
    'tetris battle gaiden',
    'super star wars',
    'super the empire strikes back',
    'super return of the jedi',
  ],
];

let seenIntro = false;
let score = 0;

// 6th question variables
let ageGuess = null;
let ageGuessAttempts = 4;

// 7th question variables
let snesGuess = null;
let snesGuessAttempts = 6;
let snesGameFound = false;

// Begin Popup City
let visiterName = prompt(
  'Welcome to my \'About Me\' page. My name is Ben Mills. Please let me know your name: '
);

let introMessage =
  'Hello ' +
  visiterName +
  ', please participate in this brief 5 question guessing game. Answers can be in Yes/No or Y/N form.\n\n';

// This for loop iterates all the questions and a switch statement controls which type of question gets asked.
// The questions, responses, and the correct answers are all stored in arrays with matching indexes.
for (let i = 0; i < questions.length; i++) {
  let answer = null;

  switch (i) {
  // Age Guess
  case 5:
    while (ageGuessAttempts > 0) {
      if (ageGuessAttempts === 4) {
        ageGuess = prompt(
          questions[i] +
              '\n\n You\'ve got ' +
              ageGuessAttempts +
              ' guesses left.'
        );
      } else {
        ageGuess = prompt(
          'You\'ve got ' + ageGuessAttempts + ' guesses left.'
        );
      }

      if (Number(ageGuess) === answers[i]) {
        score++;
        alert('You got it! Nice Guessing');
        break;
      } else if (Number(ageGuess) > answers[i]) {
        ageGuessAttempts--;
        alert('Not quite, too high.');
      } else {
        ageGuessAttempts--;
        alert('Nope, too low.');
      }
    }
    break;
    // SNES Games Guess
  case 6:
    while (snesGuessAttempts > 0) {
      if (snesGuessAttempts === 6) {
        snesGuess = prompt(
          questions[i] +
              '\n\n You\'ve got ' +
              snesGuessAttempts +
              ' guesses left.'
        );
      } else {
        snesGuess = prompt(
          'You\'ve got ' + snesGuessAttempts + ' guesses left.'
        );
      }
      // Iterate through the answers[i] array (snes games)
      for (let j = 0; j < answers[i].length; j++) {
        if (snesGuess.toLowerCase() === answers[i][j]) {
          snesGameFound = true;
        }
      }
      if (snesGameFound) {
        score++;
        alert('You guessed it. I love ' + snesGuess + '!');
      } else {
        snesGuessAttempts--;
        if (snesGuessAttempts === 0) {
          alert(
            'Sorry out of guesses. Moving on.\n\nPossible correct answers:\n\n' +
                answers[i]
          );
        } else {
          alert('Nope, keep guessing.');
        }
      }
    }
    break;
    // Yes/No Questions (0-4)
  default:
    if (i === 0 && !seenIntro) {
      seenIntro = true;
      answer = prompt(introMessage + questions[i]).toLowerCase();
    } else {
      answer = prompt(questions[i]).toLowerCase();
    }
    //
    if (answers[i] === true) {
      switch (answer) {
      case 'y':
        score++;
        alert('Correct! ' + responses[i]);
        break;
      case 'n':
        alert('Incorrect, actually ' + responses[i]);
        break;
      case 'yes':
        score++;
        alert('Correct! ' + responses[i]);
        break;
      case 'no':
        alert('Incorrect, actually ' + responses[i]);
        break;
      default:
        alert('Sorry I didn\'t catch that.');
        i--;
      }
    } else if (answers[i] === false) {
      switch (answer) {
      case 'y':
        alert('Incorrect, actually ' + responses[i]);
        break;
      case 'n':
        score++;
        alert('Correct! ' + responses[i]);
        break;
      case 'yes':
        alert('Incorrect, actually ' + responses[i]);
        break;
      case 'no':
        score++;
        alert('Correct! ' + responses[i]);
        break;
      default:
        alert('Sorry I didn\'t catch that.');
        i--;
      }
    }
  }
}

// Tally Final Score and Say Goodbye
let goodbyeMessage =
  'Thank you for playing my guessing game ' +
  visiterName +
  '.\n\nYou answered ' +
  score +
  ' of ' +
  questions.length +
  ' questions correctly.\n\nCheck the Console Log for a surprise.';

alert(goodbyeMessage);

// Log cowsay to the console
console.log(
  ' _________________________________________\n' +
    '/ Thank you for playing my guessing game. \\\n' +
    '\\ Have a good day ' +
    visiterName +
    '.                   /\n' +
    ' -----------------------------------------\n' +
    '        \\    ^__^\n' +
    '         \\   (oo)\\_______\n' +
    '             (__)\\       )\\/\\\n' +
    '                 ||----w |\n' +
    '                 ||     ||'
);
