const addQuestionButton = document.querySelector('.AddQuestion');

addQuestionButton.addEventListener('click', function(event) {
  event.preventDefault();
});

$(document).ready(function() {
  let counter =1;
  $(".AddQuestion").on("click", function() {
      counter++;
      var questionBox = $("<div>").addClass("QuestionBox");
      var questionTitleContainer = $("<div>").addClass("Questiontitlecontainer");
      var questionTitleTextarea = $("<textarea>").addClass("questionTitle").attr("placeholder", "What's the Question?");
      questionTitleContainer.append(questionTitleTextarea);

      var manditoryAnswers = $("<div>").addClass("ManditoryAnswers");
      var answer1Textarea = $("<textarea>").attr("name", "text").attr("placeholder", "Answer1").attr("id", "Answer1");
      var answer2Textarea = $("<textarea>").attr("name", "text").addClass("Answer2").attr("placeholder", "Answer2");
      manditoryAnswers.append(answer1Textarea).append(answer2Textarea);

      var extraAnswers = $("<div>").addClass("ExtraAnswers");
      var addAnswerButton = $("<button>").addClass("AddAnswer").text("Add a answer");
      extraAnswers.append(addAnswerButton);

      var answersContainer = $("<div>").addClass("AnswersContainer");
      answersContainer.append(questionTitleContainer).append(manditoryAnswers).append(extraAnswers);
      questionBox.append(answersContainer);

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
      })


      $(".title-maker-container").append(questionBox);
    if (counter >= 10) {
      $(addQuestionButton).hide();
    }

  });
});



//bug that if you enter answers on next question before finishing current question the counter messes up



console.log ("debug check if questionmaker works")
