const addQuestionButton = document.querySelector('.AddQuestion');

addQuestionButton.addEventListener('click', function(event) {
  event.preventDefault();
});
const Quizform = document.getElementById("quizForm");
$(document).ready(function() {
  let questionCounter = 1;
  $(".AddQuestion").on("click", function() {
    questionCounter++;
    if (questionCounter < 6) {
      if (questionCounter === 2) {
        $("#questionOrder").text("Your Second question");
        document.getElementById("questionOrder").style.marginLeft = "-51%";
      } else if (questionCounter === 3) {
        $("#questionOrder").text("Your Third question");
        document.getElementById("questionOrder").style.marginLeft = "-56%";
      } else if (questionCounter === 4) {
        $("#questionOrder").text("Your Fourth question");
        document.getElementById("questionOrder").style.marginLeft = "-52.5%";
      } else if (questionCounter === 5) {
        $("#questionOrder").text("Your Fifth question");
        document.getElementById("questionOrder").style.marginLeft = "-57%";
      }
      //Quizform.submit();
    }
    if (questionCounter === 5) {
      $(addQuestionButton).hide();
    }

  });

});



//bug that if you enter answers on next question before finishing current question the counter messes up



console.log("debug check if questionmaker works");


