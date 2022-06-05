const sumAll = function(number1, number2) {
    if (!Number.isInteger(number1) || !Number.isInteger(number2)) {return "ERROR"}
    lowerLimit = number1 < number2 ? number1 : number2;
    upperLimit = number1 > number2 ? number1 : number2;
    if (lowerLimit < 0) return "ERROR";
    let sum = 0;
    let currentNumber = lowerLimit;
    while (currentNumber <= upperLimit){
        sum += currentNumber;
        currentNumber++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
