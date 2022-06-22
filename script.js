// Esercizi
// Per tutti gli esercizi avremo:

// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// forEach:
// Eseguire console.log() di ogni elemento di array

// Lanciare un console.log() di ogni elemento, dopo un setTimeout di elemento * index

// risultato: dopo 0s: console.log(1)
//            dopo 1s: console.log(2)
//            dopo 2s: console.log(3)

// filter:
// Tenere dentro l'array solo i numeri pari
// risultato: [2,4,6,8]
// Tenere solo i numeri in comune con questo array: [10, 1, 2, 5, 6], usare utility come Array.includes oppure Array.indexOf.
// risultato: [1,2,5,6]

//1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.forEach((number) => console.log(number));

//2
const timeInMs = 1000;

const numbersDelayed = numbers.forEach((item, index, array) => {
  setTimeout(() => console.log(numbers[index]), timeInMs * index);
});

//3
const onlyEven = (number) => {
  return number % 2 === 0;
};

const evenFiltered = numbers.filter(onlyEven);

console.log(evenFiltered);

//4
const numbersTwo = [10, 1, 2, 5, 6];

const combinedArray = (element) => numbersTwo.includes(element);

console.log(numbers.filter(combinedArray));
