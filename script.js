// Target our DOM elements

// generated password text area output
const passwordText = document.getElementById("password");
const lengthElement = document.getElementById("length");
const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement = document.getElementById("lowercase");
const numbersElement = document.getElementById("numbers");
const symbolsElement = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

// Generate event listner
generateBtn.addEventListener("click", () => {
  const length = parseInt(lengthElement.value);
  const hasUpper = uppercaseElement.checked;
  const hasLower = lowercaseElement.checked;
  const hasNumber = numbersElement.checked;
  const hasSymbol = symbolsElement.checked;


  passwordText.innerHTML = generatePassword(
    length,
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol
  );
});

// GeneratePassword Function
function generatePassword(length, upper, lower, number, symbol) {
  // 1. initialize a pssword variable that we will add onto
  // 2. Filter out unchecked types (upper, lower, number, symbol)
  // 3. Loop over the length the user says they want
  // 4. call generator function for each type
  // 5. add the final password to the password variable and return it for out password text

  let generatedPassword = "";

  const typesCount = upper + lower + number + symbol;

  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Generator Functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * 11) + 33);
}


