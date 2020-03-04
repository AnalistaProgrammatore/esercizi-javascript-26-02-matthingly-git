//SOMEBASE
/*
function someBase(array, callBackF) {
  return callBackF(array)
}

function even(array) {
  let result = null;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      result = true;
    }
  }
  return result;
}

let arrayProva = [1, 2, 3, 4, 5];


console.log(someBase(arrayProva, even))
*/

//SOMEBASE MODO CORRETTO
const someBase = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i])
    if (result) return true
  }
  return false
}


//SOMEREDUCE
const someReduce = function (arr, callback) {
  return arr.reduce((acc, cur) => {
    if (acc) return acc
    return callback(cur)
  }, false)
}

const myCallback = x => x > 15
const A = [1, 2, 3, 4, 5]

console.log(someBase(A, myCallback))
console.log(someReduce(A, myCallback))