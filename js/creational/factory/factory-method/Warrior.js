import { Dragon } from './Dragon';
import { Player } from './Player';

export class Warrior extends Player {
  makeMonster() {
    return new Dragon();
  }
}
