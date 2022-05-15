const fiveLetterWords = require("./words.json");
const prompt = require("prompt");
const chalk = require("chalk");

function getRandom() {
  let testp = Math.random() * fiveLetterWords.length;
  return fiveLetterWords[Math.round(testp)].toUpperCase();
}

async function getGuess() {
  //todo
  let userInput = await prompt.get("guess");
  return userInput.guess.toUpperCase();
  console.log(userInput);

  async function printBody() {
    let body = await getDog();
    console.log(body);
  }
  return "guess";
}

function showHigh(expectedWord, guess) {
  //todo arr

  let arr = guess.split("");
  let arrAns = expectedWord.split("");
  let result = [];
  for (let i = 0; i < 5; i++) {
    if (arr[i] === arrAns[i]) {
      result.push(chalk.bgGreen.black(arr[i]));
    } else if (arrAns.includes(arr[i])) {
      result.push(chalk.bgYellow.black(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  console.log(result.join(""));
}

async function playGame() {
  //const expectedWord = getRandom();
  const expectedWord = "HAPPY";

  let guessesLeft = 6;
  do {
    let guess = await getGuess();

    if (guess === expectedWord) {
      return;
    } else {
      showHigh(expectedWord, guess);
      guessesLeft--;
    }
  } while (guessesLeft > 0);
}
playGame();
