import { Warrior } from './Warrior';
import { Knight } from './Knight';

const player1 = new Warrior();
console.log(player1.fightMonster());

const player2 = new Knight();
player2.fightMonster();
