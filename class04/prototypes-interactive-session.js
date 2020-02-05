const numbers = [1, 2, 3]
numbers.push(4)
numbers.push
numbers.hasOwnProperty('push')
numbers
Array.prototype.hasOwnProperty('push')
Object.getPrototypeOf(numbers) === Array.prototype
const numbers2 = [4, 5, 6, 7]
Object.getPrototypeOf(numbers2) === Array.prototype
Array.prototype.hello = function() {console.log('hello')}
numbers.hello()
numbers2.hello()
Object.getPrototypeOf(Array.prototype) === Object.prototype
// numbers --> Array.prototype --> Object.prototype --> null
console.log.hasOwnProperty('apply')
console.log.apply
// Object.create takes one arg... and it returns an object
// that object will have arg as its [[prototype]]
const protoObj = {foo: 'bar'}
const someInstance = Object.create(protoObj);
someInstance.foo
someInstance.hasOwnProperty('foo')
someInstance.baz = 'qux'
someInstance.hasOwnProperty('baz')
const myArray = Object.create(Array.prototype)
myArray.push