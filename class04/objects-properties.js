const obj = {};
// console.log(obj.dne);
// not the actual syntax, but the concept [[prototype]]
// a [[prototype]] an object that is looked at... if another object
// does not have a property
// Object.prototype
// * hasOwnProperty
// * toString
// * etc.
// direct pointer to Object.prototype
// intermediary [[prototype]] before Object.prototype
// object has no more [[prototype]] to reference null
// the only standard way of retrieving [[prototype]]... Object.getPrototypeOf(someObj)
// to set the prototype of something:
// multiple ways... but rarely .prototype (not what you think)
console.log(obj.toString);
console.log(Object.prototype.toString === obj.toString);













