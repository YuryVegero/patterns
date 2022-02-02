export class Creature {
  constructor(name, attack, defense) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
  }

  toString() {
    return `${this.name} (${this.attack}/${this.defense})`;
  }
}
