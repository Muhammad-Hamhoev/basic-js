const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error();
  }
  const newArr = [] 

  for(let i = 0; i< arr.length; i++){
    console.log ();
    if(arr[i] == "--double-next"){
      newArr.push(arr[i+1])
    }else if(arr[i] == "--double-prev"){
      if(arr[i] != 0){
        newArr.push(arr[i-1])
      }
    }else if(arr[i] == "--discard-next"){
      if(arr[i] != arr.length-1){
        i +=1
      }
    }else if(arr[i] == "--discard-prev"){
      newArr.splice(i-1,1);
    }else{
      newArr.push(arr[i])
    }
  }

  const res = newArr.filter(function(x) {
    return x !== undefined;
  });

  return res;
}