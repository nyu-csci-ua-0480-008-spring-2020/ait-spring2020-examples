

/*
const numbers = [5, 7, 9, 11, 13, 15]
function printArr(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function printArrDouble(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}
printArrDouble(numbers);
*/
/*
const numbers = [5, 7, 9, 11, 13, 15]
function forEach(arr, action) {
  for(let i = 0; i < arr.length; i++) {
    action(arr[i]);
  }
}
 */
// print out triple the value of an element for every element in Array
/*
function f(ele) {
  console.log(ele * 3);
}
forEach(numbers, f);
*/

/*
forEach(numbers, ele => console.log(ele * 3));
forEach(numbers, ele => console.log(ele + 1));
numbers.forEach(x => console.log(x));
*/
// console.log(ele, i, originalArr);

// first arg is cb
// cb functions has 3 POTENTIAL arguments
// ele
// index of that ele
// the whole array


/*
forEach - calls a function for every element
map - transform every element in an array using transform function
filter - create new array only w/ elements that pass some sort of test 
reduce - ??? takes array and reduces it to a single value (any type of value)
*/

/*
const numbers = [1, 2, 3, 4];

// map will always return new Array
// (don't mutate original Array)
function myMap(arr, transform) {
  const newArr = [];  
  for(const ele of arr) {
    newArr.push(transform(ele));
  }
  return newArr;
}
const result = myMap(numbers, x => x * x); // => result = [1, 4, 9, 16]
const result2 = myMap(numbers, x => x - 1); 
console.log(result, result2);

const result3 = numbers.map(x => x * x);
console.log(result3);
*/
/*
const numbers = [1, 2, 3, 4, 5];
function myFilter(arr, testFunction) {
  const newArr = [];
  for(const ele of arr) {
    // newArr.push(transform(ele)) 
    if(testFunction(ele)) {
      newArr.push(ele);
    } 
  }
  return newArr;
}
const odds = myFilter(numbers, n => n % 2 == 1); // => odds [1, 3, 5]
console.log(odds);
console.log(numbers.filter(n => n % 2 == 1));

// reduce will take array and reduce it to a single value
// start value / initial value
// combine function to modify that initial value
*/
/*
let initValue = 0;
for(const n of numbers) {
  // combine
  initValue = initValue + n;
}
console.log(initValue);
*/
// arr - the array to reduce
// combine function - how to calculate new value of accumulator
// initial value
function myReduce(arr, combine, initValue) {
  let acc = initValue;
  for(const ele of arr) {
    acc = combine(acc, ele); 
  }
  return acc;

};
const numbers = [1, 2, 3, 4]
const total = myReduce(numbers, (mySum, n) => mySum + n, 0);
const product = myReduce(numbers, (myProduct, n) => myProduct * n, 1);
console.log(total, product);
cards.filter(card => ['J', 'Q', 'K'].indexOf(card.face) >= 0).length
cards.reduce((count, card) => {
  if card.face in j, q, k
    return count + 1  
  else
    return count
}, 0);

const numbers = [1, 2, 3, 4, 5]
const result = numbers
  .filter(x => x % 2 == 1)
  .map(x => x * x)
  .reduce....

// functions are definitely objects
// decorator


























