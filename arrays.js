var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var name = [element, ...array]
  return name
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var book = [...array, element]
  return book
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array,index) {
  return array[2]
}

function destsructivelyRemoveElementFromBEginningOfArray(array) {
  array.shift()
  return array
}