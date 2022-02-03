export function inherit(proto) {
  function F() {
  }
  F.prototype = proto;
  return new F();
}


const animal = {
  name: "abc",
};

const dog = inherit(animal);

console.log(dog.name);
console.log(dog.__proto__.name);


const cat = {};
cat.__proto__ = animal;
console.log(cat.name);
console.log(cat.__proto__.name);
