let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];
let a4 = [10,11,12]

// Option 1:  Concat
const newArray = [].concat(a1,a2,a3,a4);
console.log('newArray::' + newArray);

// Option 2: spread operator (ES6)
// ... > Spread operator

const numbersArray = [...a1,...a2,...a3];
console.log('numbersArray::' + numbersArray);


a1.push(a2);
a1.push(a3);

console.log(a1);

[1,2,3,4,5,6,7,8,9]





