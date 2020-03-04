//REDUCEBASE
function reduceBase(array, callBackF) {
  return callBackF(array)
}

function reduce(array, startAccumulator = 0) {
  let result = startAccumulator;
  for (let i = 0; i <= array.length; i++) {
    result += parseInt(array[i], 10) + startAccumulator;
  }
  return result
}

let arrayProva = [1, 2, 3, 4];
console.log(reduce(arrayProva, 1))
console.log(reduceBase(arrayProva, reduce))

var numbers = [10, 20, 30, 40] // sums to 100
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

console.log(sum)