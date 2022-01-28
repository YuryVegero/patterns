export class Person {
  constructor() {
    this.streetAddress = this.postcode = this.city = "";
    this.companyName = this.position = "";
    this.annualIncome = 0;
  }

  toString() {
    return (
      `Person lives at ${this.streetAddress}, ${this.city}, ${this.postcode}\n` +
      `and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`
    );
  }
}
