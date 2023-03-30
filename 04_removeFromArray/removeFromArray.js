const removeFromArray = function(array, someArguments) {
    let argArray = Array.from(arguments);
    // For every argument, we see if array contains that argument
    // If it does, we remove it from the array.
    for (i = 0; i < argArray.length; i++) {
        let index = array.indexOf(argArray[i])
        if (index != -1) {
            array.splice(index, 1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
