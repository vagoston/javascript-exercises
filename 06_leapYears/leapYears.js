const leapYears = function(year) {
    if (((year % 4) || !(year % 100)) && (year % 400))  return false;
    return true;
};

// Do not edit below this line
module.exports = leapYears;
