import { WinFactory } from './WinFactory';
import { MacFactory } from './MacFactory';
import { Application } from './Application';

let factory;
let OS = "Windows";

if (OS === "Windows") {
  factory = new WinFactory();
} else if (OS === "Mac") {
  factory = new MacFactory();
}

const app = new Application(factory);

app.createUI();
app.paint(); // Output: Rendered a Windows button
