


const first = { a: 1, b: 2};
const second = { a: 1, b: 2};

const third = first;

if ( first === third) {

  //  console.log('Object are equal');

}

else {

    // console.log('Object are not same');
}

const first2 = {a: 1, b: 2, c: 2};
const second2 = { b: 2, a: 1};
console.log(JSON.stringify(first2));
console.log(JSON.stringify(second2));
if (JSON.stringify(first2) === JSON.stringify(second2)) {
    
   // console.log('Object are Equal');
}

else {
   // console.log('Object are not Equal');
}

function compareObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop] ) {
           return false;
            
        }
    }
    return true;
}
const issEquel = compareObject(first2, second2);

console.log(issEquel);





