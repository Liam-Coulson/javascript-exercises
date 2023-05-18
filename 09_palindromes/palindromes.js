const palindromes = function (str) {
  // The line below uses a regex I found on stackexchange
  str = str.replace(/[^A-Za-z]+/g, "");
  str = str.toLowerCase();
  stringArray = str.split("");
  reverseArray = str.split("").reverse();
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] != reverseArray[i]) {
      return false;
    }
  }
//   console.log(stringArray);
//   console.log(reverseArray);
  return true;
};

// console.log(palindromes("ZZZZ car, a man, a maracaz."));

// Do not edit below this line
module.exports = palindromes;
