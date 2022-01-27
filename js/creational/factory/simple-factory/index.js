import { MonsterFactory } from './MonsterFactory';

const dragon = MonsterFactory.makeMonster("Dragon", 17);
console.log(dragon.level);
