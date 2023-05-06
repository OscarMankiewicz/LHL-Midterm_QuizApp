$(document).ready(function() {
  const quizPopup = {
    "quizzes": [
      {
        "id": "quiz1",
        "title": "Name of the Quiz"
      },
      {
        "id": "quiz2",
        "title": "Name of the Quiz 2"
      },
      {
        "id": "quiz3",
        "title": "Name of the Quiz 3"
      }
    ]
  };

  const renderQuiz = function(quizzes) {
    const $questionContainer = $('#question-container');
    $questionContainer.empty();

    for (const quiz of quizzes) {
      const $quizElement = createQuizElement(quiz);
      $questionContainer.append($quizElement);
    }
  };

  const createQuizElement = function(quiz) {
    const $quiz = $('<div>').addClass('quiz');
    const $content = $('<div>').addClass('content').text(quiz.title);

    $quiz.append($content);

    $quiz.on('click', function() {
      $.ajax({
        url: `/api/quizzes`,
        method: 'GET',
        dataType: 'json',
        success: function(response) {
          console.log(response);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown);
        }
      });
    });

    return $quiz;
  };

  renderQuiz(quizPopup.quizzes);

  console.log('quizpopup is working');

  $.ajax({
    url: '/api/quizzes',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
      renderQuiz(response);
    }
  });
});
