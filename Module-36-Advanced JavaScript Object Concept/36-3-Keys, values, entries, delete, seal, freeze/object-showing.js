

const bottol = { color: 'green', hold: 'water', price: 50, isClenned: true};

// Getting all properties names

const keys = Object.keys(bottol);
console.log(keys);

// getting all values

const values =  Object.values(bottol);
console.log(values);

// getting property call 

const pairs = Object.entries(bottol);
console.log(pairs);

// getting seal 

Object.seal(bottol);
// delete property 

Object.freeze(bottol);

delete bottol.isClenned;
console.log(bottol)




