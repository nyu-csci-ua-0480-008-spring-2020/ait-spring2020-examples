/*
what is the value of this????
1. global -> regular function invocation (callbacks are invoked as regular functions... so you will often lose this as the instance)
2. instance -> method invocation
3. this when function was created -> arrow function 
4. whatever u want this 2 b -> for call / apply / bind <----
5. {} (or that is... the new instance)  -> constructor
*/
// todo: what does a block give back {
// }
/*
const obj = {
  name: 'joe',
  numbers: [1, 2, 3, 4],
  foo: this.name,
  count: function() {
    this.numbers.forEach((ele) => {
      // we want this to be obj
      // undefined for this.name????
      console.log(this.name, ele);
      // joe 1
      // joe 2
    });
  } 
};
obj.count();
*/
function eatFruit(fruit1, fruit2) {
  // when using bind this = first arg passed into bind
  console.log(this.name, 'eats', fruit1, fruit2);
}
const person = {name: 'joe'};

eatFruit('dragon fruit', 'lychees');
const boundEatFruit = eatFruit.bind(person, 'rambutan', 'lychee', '????' );

/*
function boundEatFruit(fruit2) {
  fruit1 = rambutan
}
*/
boundEatFruit();

// boundEatFruit('lychee');






















