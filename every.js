//EVERYBASE
function everyBase(arr, callback) {
  let result = false;
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i])
    if (result) {
      newArray.push(arr[i])
    }
  }
  if (newArray.length === arr.length) {
    result = true
  }
  return result
}

let arrayProva = [45, 6];
const myCallback = x => x > 15

console.log(everyBase(arrayProva, myCallback))