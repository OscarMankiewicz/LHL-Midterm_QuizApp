const addAnswerButton = document.querySelector('.AddAnswer');

addAnswerButton.addEventListener('click', function(event) {
  event.preventDefault();
});

$(document).ready(function() {
  let counter = 2
  $(".AddAnswer").on("click", function() {
    counter++
    var newAnswer = $("<textarea>").attr({
      "placeholder": "Answer"+counter,
      "id": "Answer"+counter
    });
    $(this).before(newAnswer);

    if (counter >= 4) {
      $(addAnswerButton).hide();
    }
  });
});



console.log ("debug check if answermaker works");
