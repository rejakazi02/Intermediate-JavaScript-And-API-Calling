
// single parameter Arrow function

const singleFunction = (num) => num * 5;
const value = singleFunction(8);


// single parameter 2nd away Arrow function

const singleparameter = num  => num * 5;
const values = singleparameter(6);
console.log(values);


// Arrow function of String

const getName = () => 'Brandon Sam';
const name = getName();
console.log(name);

// Arrow function of multy parameter

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(10, 10, 10);
console.log(result);


// Arrow function of multiline 

const doMath = (x, y) => {
    const sum = x + y;
    const div = x - y;
    const result = sum * div;
    const output = result * 5;
    return output;
}
 const total = doMath(12, 5);
 console.log(total);