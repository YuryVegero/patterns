import { Monster } from './Monster';

export const MonsterFactory = {
  makeMonster: function (type, level) {
    return new Monster(type, level);
  },
};
