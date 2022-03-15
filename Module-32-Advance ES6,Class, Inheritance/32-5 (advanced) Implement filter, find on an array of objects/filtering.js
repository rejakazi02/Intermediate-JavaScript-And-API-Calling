// FILTERING SYESTEM 1

const numbers = [1, 5, 99, 20, 10, 30];
const bigNumber = numbers.filter(number => number > 20);
const smallNumber = numbers.filter(number => number < 20);

console.log(bigNumber);
console.log(smallNumber);


// FILTERING SYESTEM 2

const products = [{
        name: 'water bottle',
        price: 50,
        color: 'yellow'
    },
    {
        name: 'mobile phone',
        price: 15000,
        color: 'black'
    },
    {
        name: 'smart watch',
        price: 3000,
        color: 'black'
    },
    {
        name: 'water glass',
        price: 30,
        color: 'yellow'
    }
];


const price = products.filter(productPrice => productPrice.price > 50);

 const pColor = products.filter(proColor => proColor.color == 'yellow');

// FINDING System

const pPColor = products.find(proColor => proColor.color == 'yellow');


console.log(price);
console.log(pColor);
console.log(pPColor);