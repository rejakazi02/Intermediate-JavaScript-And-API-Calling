


function stopteWatch() {
    let counter = 0;
    return function () {
        counter++; // closure worke here
return counter;


    }
}


let clock1 = stopteWatch();
console.log(clock1());
console.log(clock1());


