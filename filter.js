//FILTERBASE
function filterBase(arr, callback) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i])
    if (result) {
      newArray.push(arr[i])
    }
  }
  return newArray
}

let arrayProva = [1, 2, 3, 4, 5, 346, 78, 45, 67, 90];
const myCallback = x => x > 15

console.log(filterBase(arrayProva, myCallback))