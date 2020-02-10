// decorator is a function that returns a new version of a function
// create a function that will take a function
// and return a new function such that old function will always print out its arguments


function printArgsDec(oldFunc) {
  function newFunc(...arg) {
    console.log('argument is', arg);
    return oldFunc(...arg); 
  }
  return newFunc;
}
const newParseInt = printArgsDec(parseInt);
console.log(newParseInt("10", 2));


function cacheify(oldFunc) {
  const cache = {};
  const newFunc = (...args) => {
    const k = JSON.stringify(args);
    console.log(cache);
    if(cache.hasOwnProperty(k)) {
      console.log('hit');
      return cache[k]; 
    } else {
      console.log('miss');
      const result = oldFunc(...args); 
      cache[k] = result;
      return result;
    }
  }
  return newFunc
}
const newParseInt2 = cacheify(parseInt);
console.log(newParseInt2("10", 2));
console.log(newParseInt2("10"));
console.log(newParseInt2("10", 2));




