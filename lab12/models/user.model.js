const db = require("../util/db");
const bcrypt = require("bcryptjs");

module.exports = class User {
  constructor(user) {
    this.name = user.name;
    this.username = user.username;
    this.password = user.password;
  }

  save() {
    return bcrypt
      .hash(this.password, 12)
      .then((ePassword) => {
        return db.execute(
          "INSERT INTO User (name, username, password) VALUES (?, ?, ?)",
          [this.name, this.username, ePassword]
        );
      })
      .catch((err) => console.log(err));
  }

  static getOne(username) {
    return db.execute("SELECT * FROM User WHERE username = ?", [username]);
  }
};
