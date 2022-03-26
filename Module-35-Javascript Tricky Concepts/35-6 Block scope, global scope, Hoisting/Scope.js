const favNum = 27;

function add(first, second) {

    console.log('Hoisting :', mood)

    const result = first + second;
    console.log('This is Local Scope valriable :', result);
  
    if (result >9) {

var mood = 'happpy';
mood = 'sad';


    }

    console.log('This is Block Scope : ', mood);
    
    console.log('This is global variable : ', favNum);

    return result;
}

const sum = add(10, 20);
console.log('This is global variable : ', favNum);
 
