function Werewolf(name) {
  this.name = name;
  // this.howl = function(thing) {}...
}
// constructors are just functions
// if a function is invoked with the new keyword
// this... references new instance (empty object)
// when you use new.... this is what happens
// function Werewolf(name) {
//  this = {};
//  this.name = name;
//  return this;
// }
// .prototype is available on the function name
// as an empty object... and that empty object
// serves as the prototype for all instances
Werewolf.prototype.howl = function(thing) {
  console.log(this.name, 'howls at the', thing);
};
const w1 = new Werewolf('wally');
w1.howl('moon');
const w2 = new Werewolf('wanda');
w2.howl('person');













