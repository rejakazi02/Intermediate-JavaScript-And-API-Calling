// const fish = {
//     id: 5,
//     name: 'Hilis',
//     price: 500,
//     address: 'padma'
// };

// //ola System 

// // const id = fish.id;
// // const name = fish.name;
// // const price = fish.price;    
// // const address = fish.address;

// // New system 1

// const {
//     id,
//     name,
//     price,
//     address
// } = fish;


// console.log(id, name, price, address);

 // New system 2
const company = {
    Cname:  'GP',
    CEO: {
        id: 1,
        name: 'Ajmol',
        food: 'FUska',
    },
    web: {
        work: 'Website development',
        employee: 55,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'Css',
            third: 'js',
        },
    },

};
const { Cname } = company;
const { id, name, food } = company.CEO;
const {  employee, framework, work } = company.web;
const { first, second, third} = company.web.tech;

console.log(Cname, id, name, food, work, employee, framework, first, second, third );