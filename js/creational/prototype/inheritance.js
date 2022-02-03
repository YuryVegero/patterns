const Animal = function (name) {
  this.name = name;
};

Animal.prototype.say = function () {
  console.log(this.name);
};

const Dog = function (name) {
  Animal.apply(this, arguments);
};


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog("Bob");
dog.say();

