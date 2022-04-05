console.log('first');

// setInterval(() => {

//     console.log('tik tik tik')
// }, 3000)

let second = 0;
const timeId = setInterval(() => {
 second++;
 console.log(second)
 if(second > 15)
{
    clearInterval(timeId);
}
}, 1000)

console.log('second');

// fetch and setInterval function is work an Asynchronous aways
// OutPut :

// first
// second
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
