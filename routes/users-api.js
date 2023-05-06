/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});





module.exports = router;


//- on click of quiz load individual quiz (get /quiz/:id)
// - add new quiz to db
// - attempt a quiz
// - maybe make a quiz private?


// conditionally create new quiz if cookie does not exist, add question, loop through answers and add each answer referencing question id
// otherwise (else) add question to quiz referencing quiz_id from cookie, loop through answers add each answer
