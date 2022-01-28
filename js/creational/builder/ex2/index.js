import { PersonBuilder } from './PersonBuilder';

let personBuilder = new PersonBuilder();
let person = personBuilder.lives
  .at("ABC Road")
  .in("Multan")
  .withPostcode("66000")
  .works.at("Octalogix")
  .asA("Engineer")
  .earning(10000)
  .build();
console.log(person.toString());
