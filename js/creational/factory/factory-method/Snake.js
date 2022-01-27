export class Snake {
  constructor() {
    this.health = 40;
  }

  attack() {
    this.health -= 20;
  }
}
