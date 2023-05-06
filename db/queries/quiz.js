const db = require('../connection');

const getTitleByQuizId = (id) => {
  return db.query('SELECT title from Quiz where id = $1', [id] )
    .then(data => {
      return data.rows;
    });
};

module.exports = { getTitleByQuizId };
