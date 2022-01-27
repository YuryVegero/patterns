import { Participant } from './Participant';
import { Chatroom } from './Chatroom';

const john = new Participant('John');
const dave = new Participant('Dave');
const anna = new Participant('Anna');

// Register the participants to Chatroom
const chatroom = new Chatroom();

chatroom.register(john);
chatroom.register(dave);
chatroom.register(anna);

// Send to all
john.send("Hi");

// Participants now chat with each other
john.send('Hey, Dave!', dave);
john.send('Are you there?', dave);

dave.send('Hey man', john);
dave.send('Yes, I heard that!', john);
