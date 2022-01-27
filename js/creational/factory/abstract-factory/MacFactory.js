import { MacButton } from './MacButton';

export class MacFactory {
  createButton() {
    return new MacButton();
  }
}
