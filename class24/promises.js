// promise constructor takes one arg
// the function that runs the async task
// "executor"
// function should have to args
// 1st arg is func to execute on success
// 2nd arg is func to execute on failure
const p = new Promise(function(resolve, reject) {
  // call resolve manually when async task is successful
  // call reject ""
  console.log('in promise');
  // some async stuff happens (like retrieving a url)
  // async stuff succeeds
  // if success
  // resolve('hello');
  // else
  // async stuff fails
  // reject('hello');
  resolve(1);
});

// then is guaranteed to return a promise
// it will return the return value of resolve (1st arg) if it's a promise
// or it'll wrap return value in promise and return that
//p.then(console.log, console.log.bind(null, 'ERROR'));

const p2 = p.then(function(val) {
  console.log(val);
  return 2;
});
/*
const p2 = p.then(function(val) {
  console.log(val);
  // code above is wrapping return value in promise
  // like so
  return new Promise(function(resolve, reject) {
    resolve(2);
  });
});

*/
p2.then(console.log);




/*
a promise is an object that represents an async action

you can "tell" promise what to do when promise succeeds or failes is by using a method called then


const p = new Promise(....)
p.then(functionToExecuteIfPromiseIsSuccessful)


// pretend this is client side javascript
// /api/message/1
// /api/message/2

function getMessage(n, cb) {
  console.log('retrieving messages w/ xhr');
  const xhr = new XMLHttpRequest();
  // arguments are: method and url
  // to retrieve all messages from our api
  xhr.open('GET', '/api/message/' + n);
  xhr.addEventListener('load', function() {
    cb(xhr);
  });
  xhr.send();
}

// we want to wait for getMessage(1 ...) to finish
// where do we put call for getMessage(2...
// what about a 3rd request
getMessage(1, function(xhr) {
  console.log(xhr.responseText);
  getMessage(2, function(xhr) {
    console.log(xhr.responseText);
    // .. more requests here
  });
})


getMessage(1 ...
getMessage(2 ...
getMessage(3 ...
*/



