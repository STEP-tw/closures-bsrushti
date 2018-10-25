const makeCounterFromN = undefined;
const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

//--------makeConstant-------//

const makeConstant = function(argument) {
    return function(){
    return argument;
    };
};

//--------makeConstant-------//

const makeCounterFromZero = function() {
  let counter = 0;
  return function(){
    return counter++;
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
