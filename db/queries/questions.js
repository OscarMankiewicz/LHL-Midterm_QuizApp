const db = require('../connection');

const getQuestionsByQuizId = (id) => {
  return db.query('SELECT * FROM questions JOIN answers on answers.question_id = questions.id WHERE quiz_id = $1', [id] )
    .then(data => {
      return data.rows;
    });
};

module.exports = { getQuestionsByQuizId };
