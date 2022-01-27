const myModule = (function () {
  'use strict';

  const privateProperty = 'Hello World';
  const publicProperty = 'I am a public property';

  function privateMethod() {
    console.log(privateProperty);
  }

  function publicMethod() {
    privateMethod();
  }

  return {
    publicMethod: publicMethod,
    publicProperty: publicProperty
  };
})();

myModule.publicMethod(); // outputs 'Hello World'
console.log(myModule.publicProperty); // outputs 'I am a public property'
console.log(myModule.privateProperty); // is undefined protected by the module closure
myModule.privateMethod(); // is TypeError protected by the module closure
