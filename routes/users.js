/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('users');
});

router.get ('/search', (req, res) => { //cant get to work rn
  res.redirect ('users')
});

router.post ('/search', (req,res) => {
  res.redirect ('/users')
});

module.exports = router;
