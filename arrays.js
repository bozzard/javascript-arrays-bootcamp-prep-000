var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];

function addElementToBeginningOfArray (someArray, element ) {
  return [ element, ...someArray]
}
function destructivelyAddElementToBeginningOfArray (someArray, element ) {
  var someArray = [ element, ...someArray];
  return someArray;
}
