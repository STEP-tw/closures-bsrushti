
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

//--------compose-------// 

const lengthOf = function(list) {  
    return list.length-1
}

const isZeroIncludes = function(list) {
  return list.includes(list);
}

const getNonZeroValues = function(number) {
  return (number != 0);
}

const compose = function() {
  return function (numberList1, numberList2) {
    if(numberList1 && !numberList2) {
      return lengthOf(numberList1);
    }
    if(numberList1, numberList2) {
      numberList1 = numberList1.filter(getNonZeroValues);
      numberList2 = numberList2.filter(getNonZeroValues);
      return numberList1.concat(numberList2);
    }
  }
}

//--------makeCycler-------// 

const makeCycler = function(list) {
  let index = 0;
  let newList = list;
  const length = list.length;
  return function() {
    if(index == length) { index = 0; }
    return newList[index++];
  }
}

//--------makeCycler-------// 
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
    return object;
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
