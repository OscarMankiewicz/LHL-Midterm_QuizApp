const addQuestionButton = document.querySelector('.AddQuestion');

addQuestionButton.addEventListener('click', function(event) {
  event.preventDefault();
});

$(document).ready(function() {
  let questionCounter = 1;
  $(".AddQuestion").on("click", function() {
    questionCounter++;
    let questionBox = $("<div>").addClass("QuestionBox");
    questionBox.attr("id", "Question" + questionCounter);
    let questionTitleContainer = $("<div>").addClass("Questiontitlecontainer");
    let questionTitleTextarea = $("<textarea>").addClass("questionTitle").attr("placeholder", "What's the Question?");
    questionTitleContainer.append(questionTitleTextarea);

    let manditoryAnswers = $("<div>").addClass("ManditoryAnswers");
    //let answer1Textarea = $("<textarea>").attr("name", "text").attr("placeholder", "Answer " + questionCounter + "-1").attr("id", "Answer1");
    //let answer2Textarea = $("<textarea>").attr("name", "text").addClass("Answer2").attr("placeholder", "Answer " + questionCounter + "-1");
    //manditoryAnswers.append(answer1Textarea).append(answer2Textarea);

    //let extraAnswers = $("<div>").addClass("ExtraAnswers");
    //let addAnswerButton = $("<button>").addClass("AddAnswer").text("Add a answer");
    //extraAnswers.append(addAnswerButton);

    let answersContainer = $("<div>").addClass("AnswersContainer");
    answersContainer.append(questionTitleContainer).append(manditoryAnswers).append(extraAnswers);
    questionBox.append(answersContainer);

    $(document).ready(function() {
      let answerCounter = 2;
      $(".AddAnswer").on("click", function() {
        answerCounter++;
        if (answerCounter === 3) {
          document.getElementByClass("extra3").style.color = "flex";
        } else if (answerCounter === 4) {
          document.getElementById("extra4").style.display = "flex";
        }
        $(this).before(newAnswer);

        if (answerCounter >= 4) {
          $(addAnswerButton).hide();
        }
      });
    });


    $(".title-maker-container").append(questionBox);
    if (questionCounter >= 5) {
      $(addQuestionButton).hide();
    }

  });
});



//bug that if you enter answers on next question before finishing current question the counter messes up



console.log("debug check if questionmaker works");


