// JavaScript Object Notation
// JSON


const user = {Id: 91, name: 'Reja', job: 'actor'};

const stringified = JSON.stringify(user); //JSON Work

// console.log(stringified);
// console.log(user);


const shop = {

    name: 'Alia Store',
    address: 'Ranbir Road',
    products: [ 'laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alex',
        age: 25,
    },
    isExpensive: false
}

const shopStringfied = JSON.stringify(shop);

// console.log(shop);
// console.log(shopStringfied);

const convert = JSON.parse(shopStringfied);
console.log(convert);

-                                                                                                                                                                                                                                                                                                                                                                  