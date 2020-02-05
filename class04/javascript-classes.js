class Werewolf {
  constructor(name) {
    this.name = name;
  }

  howl(thing) {
    // do stuff
    console.log(this.name, thing);
  }
}

// yup, this "class" is just a function
console.log(typeof Werewolf);

// howl is declared on prototype too!
console.log(Werewolf.prototype.hasOwnProperty('howl'));

// not on instance, though!
console.log((new Werewolf('foo')).hasOwnProperty('howl'));
