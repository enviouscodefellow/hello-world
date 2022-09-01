"use strict"; //proper rules and no rule breaking

nameMe();

function nameMe() {
  let userName;
  userName = prompt("What is your name?");
  if (userName.length == 0) {
    userName = "user";
    console.log("Hello " + userName + "!");
  } else if (userName.length == 1) {
    alert("Your name can't be a single digit.  Please enter your name again.");
    nameMe();
  } else {
    console.log("Hello " + userName + "!");
  }

  if (userName == "Nick" || userName == "nick") {
    console.log("We're twinsies!" + " ;)");
  }

  document.write("Hi " + userName + "!");
  document.write(" Let us help you get your new home.");
}

function buildHouses(){
let userHouses = 0;
  userHouses = prompt("How many houses do you want?");
  for (let i=0;i <userHouses;i++){
    const house = document.createElement("img");
    house.src = "images/house.png";
    document.body.appendChild(house);
  }
}
