//EVERYBASE
function everyBase(array, callBackF) {
  return callBackF(array)
}

function even(array) {
  let result = null;
  let newArray = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i])
    }
  }
  if (newArray.length === array.length) {
    result = true
  }
  return result;
}

let arrayProva = [2, 4];


console.log(everyBase(arrayProva, even))
