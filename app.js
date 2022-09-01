'use strict'; //proper rules and no rule breaking

let userName;
userName = prompt('What is your name?');
if (userName.length == 0) {
  userName = 'user';
  console.log('Hello ' + userName + '!');
}
else {
  console.log('Hello ' + userName + '!')
}

if (userName == 'Nick' || userName == 'nick') {
  console.log('We\'re twinsies!' + ' \;\)');
}

document.write('Hi ' + userName + '!');
document.write(' Let us help you get your new home.');