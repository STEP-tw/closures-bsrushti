
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

const compose = function(fun1, fun2) {
  return function(numberList1, numberList2) {
    if(!numberList2) {
      result = fun2(numberList1);
      return fun1(result);
    }
    let list1 = fun1(numberList1);
    let list2 = fun1(numberList2);
    return fun2(list1,list2);
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

const curry = function(funcName,arg1) {
  return function(arg2,arg3) {
    if(arg2 && !arg3) {
      return funcName(arg1,arg2);
    }
    if(arg1 && arg3) {
      return funcName(arg1,arg2,arg3); 
    }
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
