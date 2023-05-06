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
router.post('/quiz',(req,res)=>{
  const result = req.body;
  console.log("result",result)
})

//for post gres
// quizzesQueries.addQuiz(params).then( =>question loop  questionsQueries.addQuestion(questionParams).then( =>...
//for loop for question loop
//inside for loop for answers





module.exports = router;
