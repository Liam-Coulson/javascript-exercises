const sumAll = function(num1, num2) {
    let runningSum = 0;

    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR"
    }

    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }


    if (num1 < num2) {
        for (i = num1; i <= num2; i++) {
            runningSum += i;
        }
    }
    else {
        for (i = num2; i <= num1; i++) {
            runningSum += i;
        }
    }

    return runningSum;
};

// Do not edit below this line
module.exports = sumAll;
