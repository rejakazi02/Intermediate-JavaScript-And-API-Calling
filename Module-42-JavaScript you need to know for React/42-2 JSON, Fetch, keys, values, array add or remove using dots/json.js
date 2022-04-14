const student = {

    id: 123,
    name: 'reja',
    
}

const studentJSON = JSON.stringify(student);
console.log(student);

console.log(studentJSON);

const studentobj = JSON.parse(studentJSON);

console.log(studentobj)



