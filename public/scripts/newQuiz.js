const addNewQuiz = document.querySelector('#title-maker');

$(document).ready(function() {
  $(".addAnswerButton").on("click", function(event) {
    event.preventDefault();

    if ($("#title-maker").val().length === 0) {
      $('.error-message').show();
      $('.error-message').text("The Quiz Topic shouldn't be empty!");
    } else {
      $('.error-message').text("");
      $('.error-message').hide();
      $.post("/tweets",  $( this ).serialize(),   function(response, status)  {
      // Clear text area
      $("#title-maker").val("");
      $(this).before(addNewQuiz);
      });
    }
  });
});



console.log ("If quiz topic works");


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
