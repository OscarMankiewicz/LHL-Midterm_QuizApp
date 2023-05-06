const express = require('express');
const router  = express.Router();
const quizQueries = require('../db/queries/quizzes');

router.get('/', (req, res) => {
  quizQueries.getQuizzes()
    .then(quizzes => {
      res.json(quizzes);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});




// - on click of quiz load individual quiz (get /quiz/:id)
// - add new quiz to db
// - attempt a quiz
// - maybe make a quiz private?


//for post gres
// quizzesQueries.addQuiz(params).then( =>question loop  questionsQueries.addQuestion(questionParams).then( =>...
//for loop for question loop
//inside for loop for answers
//use cookie to keep the questions all on same quiz and delete cookie on sumbit






module.exports = router;
