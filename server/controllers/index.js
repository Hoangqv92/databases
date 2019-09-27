var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((messages) => {
        res.end(JSON.stringify(messages));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((users) => {
        res.end(JSON.stringify(users));
      });
    },
    post: function (req, res) {
      // console.log('this is req:', req);
      models.users.post(req.body);
    }
  }
};

