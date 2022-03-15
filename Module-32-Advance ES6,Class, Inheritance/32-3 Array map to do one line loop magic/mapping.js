const numbers = [4, 5, 6, 7, 8];
// const output = [];

//  old style function

// function doubleOld(number) {
//     return number * 2;
// }

//  new style function

//const doubleIT = value => value * 2;

// Looping

// for(const number of numbers){
//     const result = doubleIT(number);
//     output.push(result);
   
// }


// mapping function calling. (system 1) 

//const output = numbers.map(doubleIT);

// mapping function calling. (system 2)

let output = numbers.map(x => x * 2);
let output1 = numbers.map(x => x * x);

console.log(numbers);
console.log(output);
console.log(output1);




