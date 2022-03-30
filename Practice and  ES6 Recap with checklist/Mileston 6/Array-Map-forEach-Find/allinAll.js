

const listOfArray = [7, 14, 21, 28, 35, 43, 49];

// This is here map work

const listOfNewArray = listOfArray.map((x) => x / 7);

console.log("\n Main Array", listOfArray);
console.log("\n Mapping Array", listOfNewArray, "\n");

// this is here ForEach work

listOfNewArray.forEach((value) => {
  const valueOFForEach = value * 5;
  console.log("ForEach  Value", valueOFForEach);
});

// this is here filter work

const filterArray = listOfArray.filter((value) => value > 21);
console.log("\n Filter values ", filterArray);

// this is here find work
const findArrayElements = listOfArray.find((value) => value == 43);
console.log("\n Find Value", findArrayElements);


