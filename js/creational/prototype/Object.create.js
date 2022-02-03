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
