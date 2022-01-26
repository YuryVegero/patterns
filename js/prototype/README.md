The prototype pattern is a useful way to share properties among many objects of the same type. The prototype is an object that's native to JavaScript, and can be accessed by objects through the prototype chain.

Let's say we want to create many dogs! In our example, dogs can't do that much: they simply have a name, and they can bark!

```javascript

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

```
Notice here how the constructor contains a name property, and the class itself contains a bark property. When using ES6 classes, all properties that are defined on the class itself, bark in this case, are automatically added to the prototype.

We can see the prototype directly through accessing the prototype property on a constructor, or through the __proto__ property on any instance.

```javascript
console.log(Dog.prototype);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()

console.log(dog1.__proto__);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()
```
The value of **\_\_proto__** on any instance of the constructor, is a direct reference to the constructor's prototype! Whenever we try to access a property on an object that doesn't exist on the object directly, JavaScript will go down the prototype chain to see if the property is available within the prototype chain.

The prototype pattern is very powerful when working with objects that should have access to the same properties. Instead of creating a duplicate of the property each time, we can simply add the property to the prototype, since all instances have access to the prototype object.

The term prototype chain indicates that there could be more than one step. Indeed! So far, we've only seen how we can access properties that are directly available on the first object that __proto__ has a reference to. However, prototypes themselves also have a __proto__ object!

**Object.create**

The Object.create method lets us create a new object, to which we can explicitly pass the value of its prototype.

```javascript
const dog = {
  bark() {
    return `Woof!`;
  }
};

const pet1 = Object.create(dog);
```

The prototype pattern allows us to easily let objects access and inherit properties from other objects. Since the prototype chain allows us to access properties that aren't directly defined on the object itself, we can avoid duplication of methods and properties, thus reducing the amount of memory used.

