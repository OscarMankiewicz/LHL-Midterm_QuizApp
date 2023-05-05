

$(document).ready(function() {



const quizPopup = {
  "quizzes": [
    {
      "content": {
        "text": "Name of the Quiz"
      }
    },
    {
      "content": {
        "text": "Name of the Quiz 2"
      }
    },
    {
      "content": {
        "text": "Name of the Quiz 3"
      }
    }
  ]
};

const renderQuiz = function(quizzes) {
  const $questionContainer= $('#question-container');
  $questionContainer.empty();

  for (const quiz of quizzes) {
    const $quizElement = createQuizElement(quiz);
    $questionContainer.append($quizElement);
  }
}

const createQuizElement = function(quiz) {
  const $quiz = $('<div>').addClass('quiz');
  const $content = $('<div>').addClass('content').text(quiz.title);

  $quiz.append($content);
  return $quiz;
}

renderQuiz(quizPopup.quizzes);

console.log ('quizpopup is working')

$.ajax({
  url:'/api/quizzes',
  method: 'GET',
  dataType: 'json',
  success:function(response) {
    renderQuiz(response);
  }
});



})

