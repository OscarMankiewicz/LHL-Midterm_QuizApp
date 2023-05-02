const addAnswerButton = document.querySelector('.AddAnswer');
//this is just effects the initial first question in the new quiz page

addAnswerButton.addEventListener('click', function(event) {
  event.preventDefault();
});

$(document).ready(function() {
  let counter = 2
  $(".AddAnswer").on("click", function() {
    counter++
    var newAnswer = $("<textarea>").attr({
      "placeholder": "Answer "+ "1-" + counter,
      "id": "Answer "+ "1-" + counter
    });
    $(this).before(newAnswer);

    if (counter >= 4) {
      $(addAnswerButton).hide();
      counter =2
    }
  });
});




console.log ("debug check if answermaker works")

