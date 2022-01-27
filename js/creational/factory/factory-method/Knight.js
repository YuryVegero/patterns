import {Snake} from './Snake';
import { Player } from './Player';

export class Knight extends Player {
  makeMonster() {
    return new Snake();
  }
}
