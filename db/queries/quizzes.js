const db = require('../connection');

const getQuizzes = () => {
  return db.query('SELECT * FROM quiz;')
    .then(data => {
      return data.rows;
    });
};

const addQuiz = (user_id, topic, title, question1, question2) => {
  return db.query('INSERT INTO quiz (user_id, name, title, question1, question2) VALUES ($1, $2, $3, $4, $5) returning *;', [user_id, topic, title, question1, question2])
    .then(data => {
      return data.rows;
    });
};

const addQuestion = (quiz_id, question) => {
  return db.query('INSERT INTO questions (quiz_id, question) VALUES ($1, $2);', [quiz_id, question])
    .then(data => {
      return data.rows;
    });
};

const addAnswer = (quiz_id, answer1, answer2, answer3, answer4) => {
  return db.query('INSERT INTO answers (quiz_id, answer1, answer2, answer3, answer4) VALUES ($1, $2, $3, $4, $5);', [quiz_id, answer1, answer2, answer3, answer4])
    .then(data => {
      return data.rows;
    });
};

// console.log(addQuiz(01, 01, 'Anime', 'Anime', 'Most Highly Rated Anime', 'Most popular anime of 2021'));



//do inserts here
//either all 1 query or a seperate query file for making questions
//


module.exports = { getQuizzes, addQuiz, addQuestion, addAnswer };
// module.exports = { addQuiz };
// module.exports = { addQuestion };
// module.exports = { addAnswer };



// addQuiz(userId, id, name, title, question...)
// Mathius Johnson8:09 PM
// conditionally create new quiz if cookie does not exist, add question, loop through answers and add each answer referencing question id
// otherwise (else) add question to quiz referencing quiz_id from cookie, loop through answers add each answer
