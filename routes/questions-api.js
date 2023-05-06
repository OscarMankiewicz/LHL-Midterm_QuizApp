const express = require('express');
const router  = express.Router();
const questionQueries = require('../db/queries/questions');
const titleQueries = require('../db/queries/quiz')

router.get('/:id', (req, res) => {
  let questions = []
  let title = ""
  questionQueries.getQuestionsByQuizId(req.params.id)
    .then(q => {
    questions = q
    titleQueries.getTitleByQuizId(req.params.id)
    .then (t => {
      title = t
      console.log (title)
      res.render('quiz', {title:title, questions:questions});
    })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});





module.exports = router;
