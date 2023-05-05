

const quizPopup = {
  "content": {
    "text": "Name of the Quiz"
  }
};

const renderQuiz = function(quizs) {
  const $QuestionBox = $('#QuestionBox');
  $QuestionBox.empty();

  for (const quiz of quizs) {
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
