const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let str = ''
  //console.log(arr)

  if (Array.isArray(arr)) {
    arr.forEach(el => {
      if (typeof (el) == 'string') {
        el = el.trim()
        str += el[0];
      }
    });
    str = str.toUpperCase();
    str = str.split('').sort().join('');

    return str;
  } else {
    return false;
  }


};