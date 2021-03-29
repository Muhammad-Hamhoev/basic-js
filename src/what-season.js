const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

    if(!date) {
      return "Unable to determine the time of year!";
    }

    const d = Date.prototype.getMonth.call(date);

    if(d >=2 && d <=4){
      return "spring"
    }else if(d >=5 && d <=7){
      return "summer"
    }else if(d >=8 && d <=10){
      return "autumn"
    }else{
      return "winter"
    }

};
