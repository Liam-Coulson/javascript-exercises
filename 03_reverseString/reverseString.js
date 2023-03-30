const reverseString = function(string) {
    let arrayOfString = string.split("");
    let returnString = "";
    for (i = string.length -1; i >= 0; i = i-1) {
        returnString += arrayOfString[i];
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
