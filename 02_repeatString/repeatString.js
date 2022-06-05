const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    result = "";
    for (let copies = 0; copies < num; copies++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
