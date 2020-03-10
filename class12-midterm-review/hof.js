// map - transform every element; return new array
// reduce - reduce an array into a single value (think accumulator, loop)
// filter - keep only elements that pass a test; return new array

// lets start off with some images...
const images = [
  {url: 'foo.bar/baz.jpg', tags:['something', 'other']},
  {url: 'qux.corge/idk.png', tags:['idk']},
  {url: 'ilov.pizza/pizza.gif', tags:['idk', 'other']}
];

// only image with a tag idk
console.log(images.filter(image => image.tags.includes('idk')));

// transform all urls to anchor tags, join w/ new line
console.log(images.map(obj => `<a href="${obj.url}">${obj.url}</a>`).join('\n'));

// chain filter, map, and join!!!
// gimme array of names, i don't want tag property
// also wrap in anchor tags
// and put together in single html
const result = images
  .filter(image => image.tags.includes('idk'))
  .map(obj => `<a href="${obj.url}">${obj.url}</a>`)
  .join('\n');
console.log(result);

// concatenate all the urls with reduce
// (kind of replicating join, but for object w/ 
// a string property
const added = images.reduce((acc, curEle) => {
  return acc + curEle.url;
}, '');
console.log('reduce', added);


// function that has function as argument
function callTwice(f) {
  f();
  f();
}

function sayHi() {
  console.log('hello');
}

callTwice(sayHi);
// callTwice(sayHi()); <-- don't call like this!!!, undefined is returned



// function that returns function
function makeAdder(baseNumber) {
  // baseNumber is local
  // after makeAdder returns, baseNumber
  // can still be accessed by function below
  return function(n) {
    return baseNumber + n;
  };
}
const addFive = makeAdder(5);
console.log(addFive(12));

// get u a function that does both (function as arg, returns function too)
// repeatCall will return a new function that calls the old function twice
// it'll return the result of the second call
function repeatCall(oldFunc) {
  // to mimic signature of oldFunc, need arbitrary arguments
  function newFunc(...args) {
    // args is an array
    
    // spread out args as separate arguments
    oldFunc(...args);
    return oldFunc(...args);
  }
  return newFunc;
}

const f = repeatCall(sayHi);
f();
