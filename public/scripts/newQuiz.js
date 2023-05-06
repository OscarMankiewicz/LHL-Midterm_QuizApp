const addNewQuiz = document.querySelector('#submit');

$(document).ready(function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("submitting");
    location.reload();
  });
});

console.log("If quiz topic works");


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
