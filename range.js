/**
* Scrivere qui il codice dell'esercizio 1 del capitolo 4 di eloquentJS
**/


//FUNZIONE RANGE CON VALORI POSIZIONALI
const rangePositional = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

console.log (rangePositional(1, 27, 2));



//FUNZIONE RANGE CON VALORI NOMINALI
const rangeNamed = ({start = 1, stop = 27, step = 27}) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

let start = 1;
let stop = 27;
let step = 4;
console.log(rangeNamed({step, start, stop}));