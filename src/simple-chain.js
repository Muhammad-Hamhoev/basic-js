const CustomError = require('../extensions/custom-error');

const chainMaker = {

  arr: [],

  getLength() {
    return this.arr.length; 
  },

  addLink(val) {
    this.arr.push(`( ${val} )`);
    return this; 
  },

  removeLink(pos) {
    if (typeof pos != 'number') {
      this.arr = [];
      throw Error();
    }
    if (pos >= this.arr.length || pos <= 0) {
      this.arr = [];
      throw Error();
    }
    this.arr.splice(pos - 1, 1);
    return this; 
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result; 
  }
  
};

module.exports = chainMaker;