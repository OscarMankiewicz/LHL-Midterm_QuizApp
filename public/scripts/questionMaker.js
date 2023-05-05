const addQuestionButton = document.querySelector('.AddQuestion');

addQuestionButton.addEventListener('click', function(event) {
  event.preventDefault();
});

/*let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});*/

let questionCounter = 1;

const newQuestion = (questionNumber) => {
  return `
    <div class="Questiontitlecontainer">
      <textarea id="question-content" name="text" class="questionTitle" placeholder="What's your question?"></textarea>
    </div>
    <div id="answer-container" class ="AnswersContainer">
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
      <div class="ExtraAnswers">
        <button class="AddAnswer">+ Add An Answer</button>
      </div>
    </div>
`
}

const Quizform = document.getElementById("quizForm");
$(document).ready(function() {
  $(".AddQuestion").on("click", function() {

    // Submit question:
    //con.connect(function(err) {
    //   if (err) throw err;
    //   console.log("Connected!");
    //   let sqlTopic = `INSERT INTO questions (question) VALUES ($("#title-maker").val())`;
    //   let sqlQuestion = `INSERT INTO questions (question) VALUES ($1)`;
    //   let sqlAnswer = `INSERT INTO answers (question) VALUES ($("#Answer"+questionCounter+"-1").val())`;
    //   con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted");
    //   });
    // });
    console.log($("#title-maker").val());
    console.log($("#question-content").val());
    console.log($("#Answer"+questionCounter+"-1").val());
    console.log($("#Answer"+questionCounter+"-2").val());
    console.log($("#Answer"+questionCounter+"-3").val());
    console.log($("#Answer"+questionCounter+"-4").val());
    console.log(document.getElementById("checkA").checked);
    console.log(document.getElementById("checkB").checked);
    console.log(document.getElementById("checkC").checked);
    console.log(document.getElementById("checkD").checked);


    questionCounter++;
    if (questionCounter < 6) {
      if (questionCounter === 2) {
        $("#questionOrder").text("Your Second Question");
        document.getElementById("questionOrder").style.marginLeft = "-51%";
        const anQuestion = newQuestion(questionCounter);
        $("#question-box").empty();
        $("#question-box").append(anQuestion);
        //document.getElementById("question-box").style.width = "105%";
      } else if (questionCounter === 3) {
        $("#questionOrder").text("Your Third Question");
        document.getElementById("questionOrder").style.marginLeft = "-56%";
        const anQuestion = newQuestion(questionCounter);
        $("#question-box").empty();
        $("#question-box").append(anQuestion);
      } else if (questionCounter === 4) {
        $("#questionOrder").text("Your Fourth Question");
        document.getElementById("questionOrder").style.marginLeft = "-52.5%";
        const anQuestion = newQuestion(questionCounter);
        $("#question-box").empty();
        $("#question-box").append(anQuestion);
      } else if (questionCounter === 5) {
        $("#questionOrder").text("Your Fifth Question");
        document.getElementById("questionOrder").style.marginLeft = "-57%";
        const anQuestion = newQuestion(questionCounter);
        $("#question-box").empty();
        $("#question-box").append(anQuestion);
      }
      //Quizform.submit();
    }
    if (questionCounter === 5) {
      $(".AddQuestion").text("Submit Last Question");
    }

  });

});



//bug that if you enter answers on next question before finishing current question the counter messes up



console.log("debug check if questionmaker works");
