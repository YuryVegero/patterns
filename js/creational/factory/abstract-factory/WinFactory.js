import { WinButton } from './WinButton';

export class WinFactory {
  createButton() {
    return new WinButton();
  }
}
