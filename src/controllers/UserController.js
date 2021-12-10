const User = require('../models/User');

module.exports = {
  index(req, res) {
    const users = User.findAll();
    res.render('user/index',{users});
  },

  show(req, res) { 

  },

  create(req, res) { 
    res.render('user/create', {user: null})
  },

  store(req, res) {
    const user = req.body;
    User.create(user);
    res.redirect('/users');

  },

  edit(req, res) { 

  },

  update(req, res) {

  },

  delete(req, res) {

  },
};
