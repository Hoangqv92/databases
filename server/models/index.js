var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: (callback = () => {}) => {
      db.query('SELECT * FROM messages;', (err, results, fields) => {
        if (err) {
          throw err;
        } else {
          callback(results);
        }
      });
    },
    // a function which can be used to insert a message into the database
    post: (data, callback = () => {}) => {
      console.log(data);
      db.query(`SELECT id FROM users WHERE name = ${data.username};`,
        (err, results, fields) => {
          if (err) {
            throw err;
          } else {
            data.usersID = results[0].id;
            console.log(data);
          }
        });
      // db.query(`SELECT id FROM rooms WHERE name = ${data.room};`,
      //   (err, results, fields) => {
      //     if (err) {
      //       throw err;
      //     } else {
      //       db.roomsID = results[0].id;
      //     }
      //   });
      db.query(`INSERT INTO messages (text, users_id, room) VALUES (${data.text}, ${data.usersID}, ${data.roomname});`, (err, results, fields) => {
        if (err) {
          throw err;
        } else {
          callback();
        }
      });
    }
  },

  users: {
    // a function which produces all the users
    get: (data, callback = () => {}) => {
      db.query('SELECT * FROM users;', (err, results, fields) => {
        if (err) {
          throw err;
        } else {
          callback(results);
        }
      });
    },
    // a function which can be used to insert a user into the database
    post: (data, callback = () => {}) => {
      console.log(data);
      db.query(`INSERT INTO users (user) VALUES ("${data.username}");`, (err, results, fields) => {
        if (err) {
          console.log(err);
          throw err;
        } else {
          callback();
        }
      });
    }
  }
};

