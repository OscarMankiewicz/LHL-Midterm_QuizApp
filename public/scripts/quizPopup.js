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
    }
  ]
};

const renderQuiz = function(quizzes) {
  const $QuestionBox = $('#QuestionBox');
  $QuestionBox.empty();

  for (const quiz of quizzes) {
    const $quizElement = createQuizElement(quiz);
    $QuestionBox.append($quizElement);
  }
}

const createQuizElement = function(quiz) {
  const $quiz = $('<div>').addClass('quiz');
  const $content = $('<div>').addClass('content').text(quiz.content.text);

  $quiz.append($content);
  return $quiz;
}

renderQuiz(quizPopup.quizzes);

console.log ('quizpopup is working')
})
