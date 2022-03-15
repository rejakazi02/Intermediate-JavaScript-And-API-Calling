
 // New system 1

//  Array Destructuring

 const [p, q] = [45, 94, 91, 86];
 console.log( p, q, p, q); // output 45 94

//  Nested object Destructuring

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


 console.log(Cname, id, name, food, work, employee, framework, first, second, third);

// Optional chaining is redious unexpected errop.

console.log(company?.backend?.web?.tech);
