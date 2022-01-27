// Mediator
export class Chatroom {
  constructor() {
    this.participants = {};
  }

  register(participant) {
    this.participants[participant.name] = participant;
    participant.chatroom = this;
  }

  send(message, from, to) {
    if (to) {
      // single message
      to.receive(message, from);
    } else {
      // broadcast message to everyone
      for (let key in this.participants) {
        if (this.participants[key] !== from) {
          this.participants[key].receive(message, from);
        }
      }
    }
  }
}
