//FILTERBASE
function filterBase(array, callbackF) {
  return callbackF(array)
}

function even(array) {
  let newArray = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i])
    }
  }
  return newArray;
}

let arrayProva = [1, 2, 3, 4, 5, 346, 78, 45, 67, 90];

console.log(filterBase(arrayProva, even))