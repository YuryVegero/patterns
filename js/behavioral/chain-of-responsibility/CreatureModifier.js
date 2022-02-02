export class CreatureModifier {
  constructor(creature) {
    this.creature = creature;
    this.next = null;
  }

  add(modifier) {
    if (this.next) {
      this.next.add(modifier);
    } else {
      this.next = modifier;
    }
  }

  handle() {
    if (this.next) {
      this.next.handle();
    }
  }
}
