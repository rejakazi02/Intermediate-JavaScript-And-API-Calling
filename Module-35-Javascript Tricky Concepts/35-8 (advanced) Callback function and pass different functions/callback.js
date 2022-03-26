


function welcomeMessege(name, greetHandler) {    //callback function call here
   console.log('dsfjh', name, greetHandler);
    greetHandler(name);

    
}

function greetMorning(name) {
    console.log('Good morning', name)
    
}

welcomeMessege('tom', greetMorning)

/*

OUTPUT

dsfjh tom [Function: greetMorning] 
Good morning tom


*/


