const addQuestionButton = document.querySelector('.AddQuestion');

addQuestionButton.addEventListener('click', function(event) {
  event.preventDefault();
});

$(document).ready(function() {
  let questionCounter =1;
  $(".AddQuestion").on("click", function() {
      questionCounter++;
      var questionBox = $("<div>").addClass("QuestionBox");
      questionBox.attr("id", "Question" +questionCounter);
      var questionTitleContainer = $("<div>").addClass("Questiontitlecontainer");
      var questionTitleTextarea = $("<textarea>").addClass("questionTitle").attr("placeholder", "What's the Question?");
      questionTitleContainer.append(questionTitleTextarea);

      var manditoryAnswers = $("<div>").addClass("ManditoryAnswers");
      var answer1Textarea = $("<textarea>").attr("name", "text").attr("placeholder", "Answer " + questionCounter + "-1").attr("id", "Answer1");
      var answer2Textarea = $("<textarea>").attr("name", "text").addClass("Answer2").attr("placeholder", "Answer " + questionCounter + "-1");
      manditoryAnswers.append(answer1Textarea).append(answer2Textarea);

      var extraAnswers = $("<div>").addClass("ExtraAnswers");
      var addAnswerButton = $("<button>").addClass("AddAnswer").text("Add a answer");
      extraAnswers.append(addAnswerButton);

      var answersContainer = $("<div>").addClass("AnswersContainer");
      answersContainer.append(questionTitleContainer).append(manditoryAnswers).append(extraAnswers);
      questionBox.append(answersContainer);

      $(document).ready(function() {
        let answerCounter = 2
        $(".AddAnswer").on("click", function() {
          answerCounter++
          var newAnswer = $("<textarea>").attr({
            "placeholder": "Answer "+ questionCounter + "-" + answerCounter,
            "id": "Answer "+ questionCounter + "-" + answerCounter
          });
          $(this).before(newAnswer);

          if (answerCounter >= 4) {
            $(addAnswerButton).hide();
          }
        });
      })


      $(".title-maker-container").append(questionBox);
    if (questionCounter >= 10) {
      $(addQuestionButton).hide();
    }

  });
});



//bug that if you enter answers on next question before finishing current question the counter messes up



console.log ("debug check if questionmaker works")


