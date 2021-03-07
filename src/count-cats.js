const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  count = 0;
  arr.forEach(el => {
    el.forEach(item => {
      if(item == '^^'){
        count++
      }
    });
  });
  return count;
}
