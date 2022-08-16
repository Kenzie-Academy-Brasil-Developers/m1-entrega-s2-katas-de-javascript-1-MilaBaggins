function oneThroughTwenty() {
  let result = []
  for (index = 1; index <= 20; index++) {
    result.push(index)
  }
  return result
}
console.log(oneThroughTwenty())

//call function oneThroughTwenty



function evensToTwenty() {
  let result = []
  for (index = 0; index <= 20; index++) {
    if (index % 2 === 0) {
      result.push(index)
    }
  }
  return result
}
console.log(evensToTwenty())
//call function evensToTwenty



function oddsToTwenty() {
  let result = []
  for (index = 1; index <= 20; index++) {
    if (index % 2 !== 0) {
      result.push(index)
    }
  }
  return result
}
console.log(oddsToTwenty())
//call function oddsToTwenty



function multiplesOfFive() {
  let result = []
  for (index = 5; index <= 100; index++) {
    if (index % 5 === 0) {
      result.push(index)
    }
  }
  return result
}
console.log(multiplesOfFive())
//call function multiplesOfFive



function squareNumbers() {
  let result = []
  for (index = 1; index <= 10; index++) {
    result.push(index * index)
  }
  return result
}
console.log(squareNumbers())
//call function squareNumbers



function countingBackwards() {
  let result = []
  for (index = 20; index >= 1; index--) {
    result.push(index)
  }
  return result
}
console.log(countingBackwards())
//call function countingBackwards



function evenNumbersBackwards() {
  let result = []
  for (index = 20; index >=1; index--){
    if (index % 2 === 0){
      result.push(index)
    }
  }
  return result
}
console.log(evenNumbersBackwards())
//call function evenNumbersBackwards



function oddNumbersBackwards() {
  let result = []
  for (index = 20; index >=1; index--){
    if (index %2 !== 0){
      result.push(index)
    }
  }
  return result
}
console.log(oddNumbersBackwards())
//call function oddNumbersBackwards



function multiplesOfFiveBackwards() {
  let result = []
  for (index = 100; index >= 1; index--){
    if ( index % 5 === 0){
      result.push(index)
    }
  }
  return result
}
console.log(multiplesOfFiveBackwards())
//call function multiplesOfFiveBackwards



function squareNumbersBackwards() {
  let result = []
  for (index = 10; index >= 1; index--){
    result.push(index*index)
  }
  return result
}
console.log(squareNumbersBackwards())
//call function squareNumbersBackwards
