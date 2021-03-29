const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    return Array.isArray(arr)
      ? 1 + arr.reduce((count, el) => Math.max(count, this.calculateDepth(el)),0)
      : false;
  }

};
