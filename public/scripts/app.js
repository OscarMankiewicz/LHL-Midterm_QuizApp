// Client facing scripts here
$(document).ready(function() {
  $("#quizForm").on("submit", function(event) {
    event.preventDefault();
    console.log("submitting");
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8080/quiz',
      data: { quizNumber: 1 },
      success: function(data) {
        console.log('Stored quiz number:', data.quizNumber);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error('Failed to store quiz number:', errorThrown);
      }
    });
  });
});

