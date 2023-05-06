$(document).ready(function() {
  const quizPopup = {
    "quizzes": [
      {
        "id": "quiz1",
        "title": "Name of the Quiz"
      },
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
    // console.log (quiz, "food")

    $quiz.append($content);

    $quiz.on('click', function() {
             window.location.href = '/quiz/' + quiz.id;
      // $.ajax({
      //   url: `/api/quizzes`,
      //   method: 'GET',
      //   dataType: 'json',
      //   success: function(response) {

      //     const quizData = response;
      //     const quizUrl = quizData.quizurl
      //     const quizId = quizData.id
      //     const question1 = quizData.question1;
      //     console.log (response)

      //     console.log('quizData:', quizData);

      //     const questionTitle = document.querySelector('.questionTitle');
      //     console.log(questionTitle) //returns null





      //     console.log(response);
      //     // window.location.href = '/quiz/' + quizId;
      //   },
      //   error: function(jqXHR, textStatus, errorThrown) {
      //     console.log(textStatus, errorThrown);
      //   }
      // });

    });

    return $quiz;
  };

  // renderQuiz(quizPopup.quizzes);

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
