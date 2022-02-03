
const animal = {
  speak() {
    console.log(this.name + ' makes a noise.');
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

/**
 * Sets the prototype of a specified object o to  object proto or null. Returns the object o.
 * @param o The object to change its prototype.
 * @param proto The value of the new prototype or null.
 */
// setPrototypeOf(o: any, proto: object | null): any;

Object.setPrototypeOf(Dog.prototype, animal);

const dog = new Dog('Mitzie');
dog.speak(); // Mitzie makes a noise.

