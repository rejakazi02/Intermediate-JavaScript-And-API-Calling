

// Shorthand in JavaScript 



let cat = 'Miaow';
let dog = 'Woof';
let bird = 'Peet peet';

let someObject = {
  cat,
  dog,
  bird
}

console.log(someObject);


// output 

//{
//  cat: "Miaow",
//  dog: "Woof",
//  bird: "Peet peet"
//}




// Default parameters using a function 

function multiply(a, b = 2) {
    return a * b;
  }
  
  console.log(multiply(5, 3));
  // expected output: 15
  
  console.log(multiply(5));
  // expected output: 10


  