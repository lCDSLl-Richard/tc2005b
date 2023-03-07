const messages = [
  {
    author: "Richard",
    mail: "richard@mail.com",
    content: "Hello World",
  },
  {
    author: "Dama",
    mail: "dama@mail.com",
    content: "Hello World 2",
  },
];

module.exports = class Message {
  constructor(message) {
    this.author = message.author;
    this.mail = message.mail;
    this.content = message.content;
  }

  save() {
    messages.push(this);
  }

  static getAll() {
    return messages;
  }
};
