class IChristmasTree {
  decorate() {
  }
}

class ChristmasTree extends IChristmasTree {
  decorate() {
    return "Christmas tree";
  }
}

class TreeDecorator extends ChristmasTree {
  tree;

  constructor(tree) {
    super();
    this.tree = tree;
  }

  decorate() {
    return this.tree.decorate();
  }
}

class BubbleLights extends TreeDecorator {

  constructor(tree) {
    super(tree);
  }

  decorate() {
    return super.decorate() + this.decorateWithBubbleLights();
  }

  decorateWithBubbleLights() {
    return " with Bubble Lights";
  }
}

const tree = new BubbleLights(new ChristmasTree());

console.log(tree.decorate())
