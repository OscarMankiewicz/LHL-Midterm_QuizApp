$(document).ready(function() {

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createNewQuestion = function(question) {
    let $newQuestion = $(`
      <article class="question">
        <h2 class="question-title">${question.user.name}</h2>
        <div class="question-content">
          <p>${escape(question.content)}</p>
        </div>
      </article>
    `);

    return $newQuestion;
  };


  const renderTweets = function(tweets) {
  // Clear the tweets container before rendering new tweets
    $('#tweets-container').empty();

    // Loop through each tweet and render it using the createTweetElement function
    for (let questions of quiz) {
    //how it grabs the data
      let $question = createNewQuestion(question);
      $('#tweets-container').append($question);
    }
  };

  const loadTweets = function() {
    $.ajax({
      url:'/tweets',
      method: 'GET',
      dataType: 'json',
      success:function(response) {
        renderTweets(response);
      }
    });
    console.log("loadTweets is working");
  };
  loadTweets();

  $("form").submit(function(event) {
    event.preventDefault();
    let formData = $(this).serialize();
    const errorMessage = document.getElementById("ErrorMessage");
    if (formData.length > 145) {
      $("#ErrorMessage").slideDown();
      return;
    }
    console.log(formData);
    if (formData === "") {
      $("#ErrorMessage").slideDown();
      return;

    }
    $.ajax({
      method: "POST",
      data: formData,
      url: "/tweets",
      success:function(response) {
        loadTweets();
      },
      error: function(textStatus, errorThrown) {
        $("#ErrorMessageNoText").slideDown();

      }

    });
    errorMessage.style.display = "none";
  });


});
