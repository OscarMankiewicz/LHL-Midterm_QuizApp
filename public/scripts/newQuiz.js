const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'labber',
  password: 'labber',
  database: 'midterm'
});

app.post('/quiz', (req, res) => {
  // Get the count of rows in the quiz table
  pool.query('SELECT COUNT(*) as count FROM quiz', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to get quiz count' });
    } else {
      const quizNumber = results[0].count + 1;
      // Insert the quiz number into the database
      pool.query('INSERT INTO quiz (quizURL) VALUES (?)', [quizNumber], (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: 'Failed to save quiz number' });
        } else {
          res.json({ quizNumber: quizNumber });
        }
      });
    }
  });
});

app.get('/quiz', (req, res) => {
  // Select all the rows from the quiz table
  pool.query('SELECT * FROM quiz', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to get quiz data' });
    } else {
      res.json(results);
    }
  });
});


console.log("If quiz topic works");

app.listen(8080, () => {
  console.log('Server started on port 8080');
});

//ill try and implement this later
/*const addProperty = function(property) {
  const query = {
    text: 'INSERT INTO Quiz (UsersID, Questions=1) VALUES ($1, $2,) RETURNING *',
    values: [
      property.owner_id,
      property.title,

    ]
  };
  return pool.query(query.text, query.values)
    .then(res => {
      return res.rows[0];
    })
    .catch(err => {
      console.log(err.message);
      throw err;
    });
};*/
