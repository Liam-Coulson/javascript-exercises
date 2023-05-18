const fibonacci = function(n) {
    if (n < 1) {
        return "OOPS";
    }
    var sequence = [1, 1];
    n = parseInt(n);
    while (sequence.length < n) {
        sequence.push(sequence[sequence.length - 2] 
            + sequence[sequence.length - 1])
    }
    return sequence[sequence.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
