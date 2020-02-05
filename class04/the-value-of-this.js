// this???
// 1. regular function - global
// 2. method - instance method is called on
// 3. call/apply/bind - whatever first argument is
// 4. arrow function - whatever this is when arrow function is created
// 2 other values of this...
// regular function invocation
// this refers to "global" object
function f() {
  this.x = 100;
}
// f(); // regular function invocation
// console.log(x);
// console.log(global);
// almost always... a callback function is invoked as a regular function

const someObj = {name: 'joe', food: ['ramen', 'pizza', 'taco']};
someObj.hi = function() {console.log(this.name)};
// someObj.hi();
someObj.problem = function() {
  this.food.forEach(item => {
    // this will be whatever this was
    // when function was created
    console.log(this.name, 'eats', item);
  });
};
/*
someObj.problem = function() {
  const that = this;
  this.food.forEach(function(item) {
    console.log(that.name, 'eats', item);
  });
};
*/
someObj.problem();
/*
someObj.problem = function() {
  this.food.forEach((function(item) {
    console.log(this.name, 'eats', item);
  }).bind(this));
};
someObj.problem();
*/





// method invocation
// this refers to the actual object / instance that method is called on
const obj = {f};
// {f: f}
// obj["f"] = f
// obj["f"] = function() ...
// obj.f();
//console.log(obj.x);
//console.log(x);
