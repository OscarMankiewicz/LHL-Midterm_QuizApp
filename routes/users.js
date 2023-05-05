/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const app = express();
// app.set("view engine", "ejs"); //this crashes app

console.log ("user.js is working")

app.get ('/newquiz', (req, res) => {
  res.render('newquiz')
})



app.get('/', (req, res) => {
  pool.query('SELECT NAME FROM quiz', (error, results) => {
    if (error) {
      throw error
    }
    res.render('quiz', { quiz: results.rows })
  })
})




module.exports = app;
