export class Application {
  constructor(factory) {
    this.factory = factory;
    this.button = null;
  }

  createUI() {
    this.button = this.factory.createButton();
  }

  paint() {
    this.button.paint();
  }
}
