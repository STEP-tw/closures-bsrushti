const makeDeltaTracker = undefined;
const curry = undefined;
const compose = undefined;

//--------makeConstant-------//

const makeConstant = function(argument) {
    return function(){
    return argument;
    };
};

//--------makeCounterFromZero-------//

const makeCounterFromZero = function() {
  let counter = 0;
  return function(){
    return counter++;
  }
};

//--------makeFiboGenerator-------// 

const makeFiboGenerator = function(number1, number2) {
  let oldNum = 1;
  let newNum = 0;
  let currNum = 0;
  if(number1 && number2) {
    currNum = newNum = number1;
    oldNum = currNum+1;;
  }

  if(number1 && !number2) {
    oldNum = number1;
  }

  return function(){
    currNum = newNum;
    newNum = oldNum + newNum;
    oldNum = currNum;
    return currNum;
  }
};

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
