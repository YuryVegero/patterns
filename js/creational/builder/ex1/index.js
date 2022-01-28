import { Raptor } from 'js/creational/builder/ex1/Raptor';

let raptor3 = new Raptor.Builder('88C')
  .withSpeed(45)
  .withPlumage('heavy')
  .build();

console.log(raptor3.plumage);
