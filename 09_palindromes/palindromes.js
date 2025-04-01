let string = "racecar";

const palindromes = function (string) {
    let stringArray = string.toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s+/g, '').split('');
    let stringArrayCopy = [];
    for (let i = stringArray.length - 1; i >= 0; i--) {
      stringArrayCopy.push(stringArray[i])
    }
    if (stringArray.toString() === stringArrayCopy.toString()) {
      return true
    }
    else return false};

palindromes(string)

// Do not edit below this line
module.exports = palindromes;
