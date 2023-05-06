const db = require('../connection');

const getAnswersByQuizId = (id) => {
  return db.query('SELECT * FROM Answers WHERE quiz_id = $1', [id] )
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAnswersByQuizId };
