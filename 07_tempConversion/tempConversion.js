const ftoc = function(fTemperaure) {
  return Math.round(((fTemperaure - 32) * 5 /9) * 10 ) / 10;
};

const ctof = function(cTemperature) {
  return Math.round(((cTemperature * 9 / 5 ) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
