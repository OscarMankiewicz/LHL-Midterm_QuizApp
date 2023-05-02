const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

app.get('/newquiz', (req, res) => { //relocate later
  console.log( "Serveeeeer",__dirname)
  res.render('newquiz')
})


module.exports = router;
