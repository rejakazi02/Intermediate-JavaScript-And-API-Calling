


// Primitive data type 

let a = 'hello';

let b = a;
console.log(a, b);

a = 'gelo';

console.log(a, b);

// Output Is 

//  hello hello
//  gelo hello

//  non-primitive data type 


let x = {
    job: 'Web  Developer'
};

let y = x;

console.log(x, y);

x.job = 'Font end Developer';

console.log(x, y);

// OUTPUT is 

//  { job: 'Web  Developer' } { job: 'Web  Developer' }
//  { job: 'Font end Developer' } { job: 'Font end Developer' }



