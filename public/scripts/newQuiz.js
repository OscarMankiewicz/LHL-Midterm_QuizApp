const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const generateUrl = require('./app.js').generateUrl;
const addNewQuiz = document.querySelector('#title-maker');

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
  const quizUrl = generateURL();

  // Insert the URL into the database
  pool.query('INSERT INTO quiz (quizURL) VALUES (?)', [quizUrl], (error, results) => {
    if (error) {
      // Handle the error if the insert operation fails
      console.error(error);
      res.status(500).json({ error: 'Failed to save URL' });
    } else {
      // Retrieve the URL from the database
      pool.query('SELECT quizURL FROM quiz WHERE quizURL = ?', [quizUrl], (error, results) => {
        if (error) {
          // Handle the error if the select operation fails
          console.error(error);
          res.status(500).json({ error: 'Failed to retrieve URL' });
        } else {
          // Send a response to the client with the generated URL
          const quizUrl = results[0].quizURL;
          res.json({ quizUrl: quizUrl });
        }
      });
    }
  });
});



$(document).ready(function() {
  $(".addAnswerButton").on("click", function(event) {
    event.preventDefault();

    if ($("#title-maker").val().length === 0) {
      $('.error-message').show();
      $('.error-message').text("The Quiz Topic shouldn't be empty!");
    } else {
      $('.error-message').text("");
      $('.error-message').hide();
      $.post("/quiz",  $(this).serialize(),   function(response, status)  {
      // Clear text area
        $("#title-maker").val("");
        $(this).before(addNewQuiz);
      });
    }
  });
});

console.log("If quiz topic works");

$(document).ready(function(){
  $("#submit").on("click", function(event){
    generateUrl();
  })
})

function generateUrl() {
  $.ajax({
    type: "POST",
    url: "/quiz",
    success: function(data) {
      console.log("Generated URL:", data.quizUrl);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error("Failed to generate URL:", errorThrown);
    }
  });
}


//ill try and implement this later
const addProperty = function(property) {
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
};
