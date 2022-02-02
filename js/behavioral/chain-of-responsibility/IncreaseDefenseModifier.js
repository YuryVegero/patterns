import { CreatureModifier } from './CreatureModifier';

export class IncreaseDefenseModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    if (this.creature.attack <= 2) {
      console.log(`Increasing ${this.creature.name}'s defense`);
      this.creature.defense++;
    }
    super.handle();
  }
}
