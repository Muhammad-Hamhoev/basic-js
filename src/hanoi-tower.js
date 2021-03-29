const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(number, speed) {

  const obj = {};

  obj.turn = 2 ** (number - 1);
  obj.seconds = Math.floor(obj.turn / (speed / 3600));
  
  return obj;
};

