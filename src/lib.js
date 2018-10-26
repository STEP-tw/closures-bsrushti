
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

//--------makeCounterFromN-------// 

const makeCounterFromN = function(start) {
  let counter = start;
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
    if(!numberList2) {
      result = funcTwo(numberList1);
      return funcOne(result);
    }
    return funcTwo(funcOne(numberList1),funcOne(numberList2));
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
const makeDeltaTracker = function(old) {
  let object = {};
  object.old = old;
  let count = 0;
  return function(newValue) {
    object.delta = 0;
    if(count > 0){ 
      object.old = object.new  
    };

    if(newValue) {
      object.delta = newValue;
    };

    object.new = object.delta + object.old;
    count++;
    return Object.assign({}, object);
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
