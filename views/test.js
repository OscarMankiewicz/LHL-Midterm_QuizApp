// on Load of that page, make a call to getAnswers and pass 1 to it
// target $(".AnswersContainer").append
// Clicking the add Question button is submitting by Ajax to the database and wait for response
// If the response is success, we'll do empty the container that holds the answers $(".AnswersContainer").empty then we now call getAnswers and pass 2 to it then target $(".AnswersContainer").append
// If the response is error, then it will clear the data in inputs field
let questionNumber = 1;
questionNumber++;

const getAnswers = (questionNumber) => {
  return `
  <div class = "ManditoryAnswers">
  <div class="allAnswer">
    <div id="answerTagA" class="answerTag"> A </div>
    <input name="text" id="Answer${questionNumber}-1" class="answer" placeholder="Answer 1">
    <input type="checkbox" id="checkA" class="check">
  </div>
  <div class="allAnswer">
    <div id="answerTagB" class="answerTag"> B </div>
    <input name="text" id="Answer${questionNumber}-2" class="answer" placeholder="Answer 2">
    <input type="checkbox" id="checkB" class="check">
  </div>
  <div id="extra3" class="allAnswer">
    <div id="answerTagC" class="answerTag"> C </div>
    <input name="text" id="Answer${questionNumber}-3" class="answer" placeholder="Answer 3" >
    <input type="checkbox" id="checkC" class="check">
  </div>
  <div id="extra4" class="allAnswer extra">
    <div id="answerTagD" class="answerTag"> D </div>
    <input name="text" id="Answer${questionNumber}-4" class="answer" placeholder="Answer 4">
    <input type="checkbox" id="checkD" class="check">
  </div>
</div>
`
}





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
