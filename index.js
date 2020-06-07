// Add your functions here
function map(arr, callbackFn) {
  let newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(callbackFn(arr[i]))
  }
  return newArr
}

function reduce(arr, callbackFn, startingPoint) {
  let newValue = startingPoint ? startingPoint : arr[0]
  if (startingPoint){
    newValue = startingPoint;
  }
  for (var i = 0; i < arr.length; i++) {
    newValue = callbackFn(arr[i], newValue)
  }
  return newValue
}
