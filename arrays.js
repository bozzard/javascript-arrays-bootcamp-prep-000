var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];

function addElementToBeginningOfArray (someArray, element ) {
  return [ element, ...someArray]
}
function destructivelyAddElementToBeginningOfArray (someArray, element ) {
//  var someArray = [ element, ...someArray];
  someArray.unshift(element);
  return someArray;
}

function addElementToEndOfArray (someArray, element ) {
  return [ ...someArray, element]
}
function destructivelyAddElementToEndOfArray (someArray, element ) {
//  var someArray = [ element, ...someArray];
  someArray.push(element);
  return someArray;
}


function removeElementFromBeginningOfArray (someArray, element ) {
  someArray.slice(1);
  return someArray.slice(1);
}
function destructivelyRemoveElementFromEndOfArray (someArray, element ) {
  someArray.pop();
  return someArray;
}

function accessElementInArray(someArray, index)  {
  return someArray[index];
}
