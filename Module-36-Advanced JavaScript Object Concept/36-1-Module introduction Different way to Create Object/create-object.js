
// 1. Using object literal

const student = { name: 'sakib all bacchu', age: 86, job: 'cricketer'};

// 2. Constructor 

const person = new Object();

// 3. const human = Object.create(null); 

const human = Object.create(student);

// console.log(human.job) 

// 4. class 

class People {   //syntactical sugar 

    constructor(name, age){

        this.name = name;
        this.age = age;
    }
}
 const peop = new People('Manus', 12);
//  console.log(peop);

// function 

function Manus(name) {

    this.name = name; 
}

const man = new Manus('kader');
// console.log(man); 




