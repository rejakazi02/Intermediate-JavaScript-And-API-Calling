

const products = [{
        name: 'water bottle',
        price: 50,
        color: 'yellow'
    },
    {
        name: 'mobile phone',
        price: 5000,
        color: 'black'
    },
    {
        name: 'smart watch',
        price: 3000,
        color: 'black'
    },
    {
        name: 'water glass',
        price: 15000,
        color: 'yellow'
    }
];


const result = products.find(proPrice => proPrice.price == 5000);

console.log(result);




