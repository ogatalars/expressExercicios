const fs = require('fs');
const { uuid } = require('uuidv4');

let db = require('../database/db.json');
// // const obj = JSON.parse("{'nome'': 'teste'}");
// const json = JSON.stringify({nome: 'pedro'});

module.exports = {
  findAll() {
    return db.users;
  },

  findById(id) {
  },

  create(user) {
    db.users.push({ id: uuid(), ...user});
    const json = JSON.stringify(db);
    fs.writeFileSync('./database/db.json', json);
  },

  update(id, user) {
  },

  delete(id) {
  },
};