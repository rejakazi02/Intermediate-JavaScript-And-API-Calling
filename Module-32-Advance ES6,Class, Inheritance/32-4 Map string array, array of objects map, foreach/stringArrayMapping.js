// ARRAY STRING LENGTH FINDING USING MAPPING

const friends = ['Habu', 'Ziya vai', 'alu mama', 'raje'];
const stringLength = friends.map(fSL => fSL.length);
console.log(stringLength);

// ARRAY OBJECT FINDING USING MAPPING

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
        color: 'white'
    }
]

const productName = products.map(proName => proName.name);
const productPrice = products.map(proPrice => proPrice.price);


// ALL Object PRINT USING MAPPING

//products.map(product => console.log(product));

// ALL Object PRINT USING FOREACH

products.forEach(product => console.log(product));

console.log(productName);
console.log(productPrice);








