

/*
1. variable value not assigned
2. function but did not write return anything
3. just wrote return but did not return anything
4. parameter that is not passed
5. property that does not exist in an object
6. Accessing array element out of range
7. accessing delete array element
8. explicity set value to undefined
9. null vs undefined

*/


let first;

// console.log(first);  // undefined


function secound(x, y) {
    const sum = x + y;
    // here i can not declare return variable that's why this result is undefined  
}

const result = secound(10, 20);
// console.log(result);



function add(a, b) {
   const sum = a + b;
   if (b < 10) {
      return; 
   }

   const fun = a * b;
   return sum;
}


const fourth = add(2, 7);
// console.log(fourth);


function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result;
}

double(81);
const fifth = { name: 'sogir', age: 52, location: 'bandarban'};
//console.log(fifth.phone);


const sixth = [51, 15, 21, 12];

// console.log( sixth[4]);

delete sixth[2];
// console.log(sixth[2]);

const seventh = undefined;
// console.log(seventh)

const myObject = {name: 'samad', profession: null}




