// functions that either take functions as args or return a function
// decorator
// hof that takes in another function and "modifies" in some way
// ... it changes the args or return value w/ out accessing source code of function
// 1. debugArgs decorator
// 2. cache decorator

function debugArgs(oldFn) {
  // produce a new function
  // new function calls old
  // and debugs by printing out arguments
  function newFn(...args) {
    console.log('arguments are', args);
    // ['11', 2] // rest ^^^^^
    //
    // ['11', 2] oldFn('11', 2) // spread \/\/
    const ret = oldFn(...args);
    return ret;
  }
  return newFn;
}

// debugArgs(someFunc) <--- someFunc????
// console.log(parseInt("11", 2));
parseInt = debugArgs(parseInt);
// console.log(parseInt("11", 2));
const verboseConsoleLog = debugArgs(console.log);
verboseConsoleLog(1, 2, true);

/*
// spread
//
const a = [1, 2, 3];

const b = [4, 5, 6];
const c = [...a, ...b, 7, 8];
*/

function cachify(oldFn) {
  const cache = {};

  function newFn(...args) {
    console.log('cache is', cache);
    const k = JSON.stringify(args);
    if(cache.hasOwnProperty(k)) {
      console.log('cache is hit!!!!');
      return cache[k];
    } else {
      const result = oldFn(...args);
      cache[k] = result;
      return result;
    }
  }

  return newFn;
}
parseInt = cachify(parseInt);
console.log(parseInt('11', 2));
console.log(parseInt('10'));
console.log(parseInt('11', 2));















