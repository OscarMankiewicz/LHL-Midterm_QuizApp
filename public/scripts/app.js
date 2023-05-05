// Client facing scripts here
const submitButton = document.querySelector('#submit');

$(document).ready(function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("submitting");
    generateUrl(function(quizURL){
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/quiz',
        data: {quizURL: quizURL },
        success: function(data) {
          console.log('Generated URL:', data.quizURL);
          location.reload();
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.error('Failed to generate URL:', errorThrown);
        }
      });
    });
  });
});

function generateUrl(callback) {
  const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
  let quizUrl = '';
  for (let i = 0; i < 7; i++) {
    const randomUnit = Math.floor(Math.random() * alphabet.length);
    quizURL += alphabet[randomUnit];
  }
  callback(quizUrl);
}
