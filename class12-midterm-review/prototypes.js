class Werewolf {
  // defines props on actual obj
  constructor(name) {
    this.name = name;
    this.furry = true;
  }

  // methods are defined on prototype
  howl(thing) {
    console.log(this.name, 'howls at the', thing);
  }
}
// Function.prototype === Werewolf.prototype
// Object.getPrototypeOf(Werewolf) === Werewolf.prototype
// Object.getPrototypeOf(w) === Werewolf.prototype

console.log(typeof Werewolf);
const w = new Werewolf('wally');
w.howl('moon');
console.log(w.hasOwnProperty('name'));
console.log(w.hasOwnProperty('howl'));

/*
function Werewolf(name) {
  this.name = name;
  this.furry = true;
  // maybe a way to create a function
}
// Werewolf.prototype is prototype of every instance created
// by Werewolf constructor
Werewolf.prototype.howl = function(thing) {
  console.log(this.name, 'howls at the', thing);
};
const w = new Werewolf('wally');
w.howl('moon');
const w2 = new Werewolf('wanda');
w2.howl('moon');
*/



