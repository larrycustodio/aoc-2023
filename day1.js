import expect from './test-helpers'

const transformHeadTailStringToDigit = (word) => {
    let firstDigit;
    let lastDigit;
    let currIdx = 0;
    while (currIdx < word.length) {
      if (!isNaN(word[currIdx])) {
        if (!firstDigit) {
          firstDigit = word[currIdx];
        }
        lastDigit = word[currIdx];
      }
      currIdx += 1;
    }
    return Number(`${firstDigit}${lastDigit}`);
  };
  
  const transformStringToDigit = (word) => {
    let firstDigit;
    let lastDigit;
    let currIdx = 0;
  
  const wordedDigits = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
      
    while (currIdx < word.length) {
      const currChar = word[currIdx];
      if (!isNaN(currChar)) {
        if (!firstDigit) {
          firstDigit = currChar;
        }
        lastDigit = currChar;
      } else {
        const numericSubstring =
          wordedDigits.findIndex((w) => word.slice(currIdx).startsWith(w)) + 1;
        if (numericSubstring) {
          if (!firstDigit) {
            firstDigit = numericSubstring;
          }
          lastDigit = numericSubstring;
        }
      }
      currIdx += 1;
    }
    return Number(`${firstDigit}${lastDigit}`);
  };

// round 1
const getSumOfFirstLastIntDigits = (input) =>
    input.split('\n').map(transformHeadTailStringToDigit).reduce((sum, curr) => (sum += Number(curr)), 0);

// round 2
const getSumOfFirstLastWordedDigits = (input) =>
    input.split("\n")
    .map(transformStringToDigit)
        .reduce((sum, curr) => (sum += curr), 0);