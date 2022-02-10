class Monkey {
  shout() {
    console.log('Ooh oo aa aa!');
  }

  accept(operation) {
    operation.visitMonkey(this);
  }
}

class Lion {
  roar() {
    console.log('Roaaar!');
  }

  accept(operation) {
    operation.visitLion(this);
  }
}

class Dolphin {
  speak() {
    console.log('Tuut tuttu tuutt!');
  }

  accept(operation) {
    operation.visitDolphin(this);
  }
}

// Посетители
class Visitor {
  visitMonkey(monkey) {
    throw new Error(`В ${this.constructor.name} не описан метод visitMonkey()`)
  }

  visitLion(lion) {
    throw new Error(`В ${this.constructor.name} не описан метод visitLion()`);
  }

  visitDolphin(dolphin) {
    throw new Error(`В ${this.constructor.name} не описан метод visitDolphin()`);
  }
}

class VoiceVisitor extends Visitor {
  visitMonkey(monkey) {
    monkey.shout()
  }

  visitLion(lion) {
    lion.roar()
  }

  visitDolphin(dolphin) {
    dolphin.speak()
  }
}

class JumpVisitor extends Visitor {
  visitMonkey(monkey) {
    console.log('Jumped 20 feet high! on to the tree!')
  }

  visitLion(lion) {
    console.log('Jumped 7 feet! Back on the ground!')
  }

  visitDolphin(dolphin) {
    console.log('Walked on water a little and disappeared')
  }
}


const monkey = new Monkey();
const lion = new Lion();
const dolphin = new Dolphin();

const voicer = new VoiceVisitor();
const jumper = new JumpVisitor();


// Пробуем первого посетителя
monkey.accept(voicer);   // Ooh oo aa aa!
lion.accept(voicer);      // Roaaar!
dolphin.accept(voicer);   // Tuut tutt tuutt!

// Пробуем комбинацию из двух посетителей
// Второй посетитель добавляет новое поведение в классы элементов без изменения самих элементов.
monkey.accept(voicer);   // Ooh oo aa aa!
monkey.accept(jumper);    // Jumped 20 feet high! on to the tree!

lion.accept(voicer);     // Roaaar!
lion.accept(jumper);     // Jumped 7 feet! Back on the ground!

dolphin.accept(voicer); // Tuut tutt tuutt!
dolphin.accept(jumper);   // Walked on water a little and disappeared
