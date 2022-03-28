
const bottol = { color: 'green', hold: 'water', price: 50, isClenned: true};

/*

for(let i=0; i<=10; i++){}

for(const num of numbers) {} //Array

for(const prop in bottol){} // object

*/

for (const prop in bottol) {
   // console.log(prop, bottol[prop])
}

const keys = Object.keys(bottol);
// console.log(keys)

for (const prop of keys) {
    // console.log(prop, bottol[prop])
}

// advance

const entries = Object.entries(bottol);
// console.log(entries);

for (const [keys, value]  of Object.entries(bottol)) {
    console.log(keys, value);
}






