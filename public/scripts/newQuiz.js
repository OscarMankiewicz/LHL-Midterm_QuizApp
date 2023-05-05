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
  // Call the createQuizURL function to generate a random URL
  const quizUrl = req.body.quizURL;
  // Insert the URL into the database
  pool.query('INSERT INTO quiz (quizURL) VALUES (?)', [quizUrl], (error, results) => {
    if (error) {
      // Handle the error if the insert operation fails
      console.error(error);
      res.status(500).json({ error: 'Failed to save URL' });
    } else {
        res.json({ quizUrl: quizUrl });
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
