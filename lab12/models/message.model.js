const db = require("../util/db");

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
    return db.execute(
      `
      INSERT INTO Message(author, mail, content) 
      VALUES (?, ?, ?)
      `,
      [this.author, this.mail, this.content]
    );
  }

  static getAll() {
    return db.execute("SELECT * FROM Message");
  }

  static deleteById(id) {
    return db.execute("DELETE FROM Message WHERE id = ?", [id]);
  }
};
