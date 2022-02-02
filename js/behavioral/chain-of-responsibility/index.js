import { Creature } from './Creature';
import { CreatureModifier } from './CreatureModifier';
import {DoubleAttackModifier} from './DoubleAttackModifier';
import {IncreaseDefenseModifier} from './IncreaseDefenseModifier';


let peekachu = new Creature("Peekachu", 1, 1);
console.log(peekachu.toString());

let root = new CreatureModifier(peekachu);

root.add(new DoubleAttackModifier(peekachu));
root.add(new IncreaseDefenseModifier(peekachu));

root.handle();
console.log(peekachu.toString());

