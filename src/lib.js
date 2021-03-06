
//--------makeConstant-------//

const makeConstant = function(argument) {
  return function(){
    return argument;
    };
};

//--------makeCounterFromN-------// 

const makeCounterFromN = function(start) {
  let counter = start;
  return function (){
    return counter++;
  }
};

//--------makeCounterFromZero-------//

const makeCounterFromZero = function() {
  return makeCounterFromN(0);
};

//--------makeFiboGenerator-------// 

const makeFiboGenerator = function(number1, number2) {
  let oldNum = 1;
  let newNum = 0;
  let currNum = 0;

  if(number1 && number2) {
    currNum = newNum = number1;
    oldNum = currNum + 1;
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

//--------compose-------// 

const compose = function(funcOne, funcTwo) {
  return function(numberList1, numberList2) {
    return funcOne(funcTwo(numberList1,numberList2));
  }
};

//--------makeCycler-------// 

const makeCycler = function(list) {
  let index = 0;
  const result = [];
  const length = list.length;
  return function() {
    result[index] = list[index];
    if(index == length) { index = 0; }
    return result[index++];
  }
}

//--------makeDeltaTracker-------// 

const makeDeltaTracker = function(initialValue) {
  let newValue = initialValue;
  return function(deltaValue = 0) {
    let oldValue = newValue;
    newValue = deltaValue + oldValue;
    return {old:oldValue, delta:deltaValue, new:newValue};
  }
}

//--------curry-------// 

const curry = function(funcName,value1) {
  return function(value2,value3) {
      return funcName(value1,value2,value3); 
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
