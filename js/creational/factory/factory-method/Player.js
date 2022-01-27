export class Player {
  fightMonster() {
    const monster = this.makeMonster();
    monster.attack();
    return monster;
  }
}
