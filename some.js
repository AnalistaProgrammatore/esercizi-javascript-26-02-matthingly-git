//SOMEBASE
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