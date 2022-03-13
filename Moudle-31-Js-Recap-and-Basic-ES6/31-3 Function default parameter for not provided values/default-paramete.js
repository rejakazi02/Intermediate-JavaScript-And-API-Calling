function add(num1, num2 ) {
    // option 1
    //     if (num2 == undefined){
    //         num2 = 0;
    //     }
    // Option 2
// num2 ==num2 || 0
const total = num1 + num2;
return total;  



}

const myValue = add(15, 17);
console.log(myValue);

// function fullName(first, last = 'kazi ') (last = 'kazi ') this system use only for ES6.
function fullName(first, last = 'kazi') {
    const name = first + ' ' + last;
    return name;
    
}

const myName = fullName('reja');
console.log(myName);