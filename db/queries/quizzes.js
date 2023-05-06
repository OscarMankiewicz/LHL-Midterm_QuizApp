const db = require('../connection');

const getQuizzes = () => {
  return db.query('SELECT * FROM quiz;')
    .then(data => {
      return data.rows;
    });
};

//do inserts here
//either all 1 query or a seperate query file for making questions
//


module.exports = { getQuizzes };
