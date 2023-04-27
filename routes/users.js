/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const app = express();
// app.set("view engine", "ejs"); //this crashes app

app.get ('/newquiz', (req, res) => {
  res.render('newquiz')
})

module.exports = app;

