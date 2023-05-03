//function to generate a random string

function generateRandomString() {
  let result = '';

  //All alphanumeric characters

  const chars ='AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';
  const charsLength = chars.length;
  //for loop to pick 6 random characters
  for(let i = 0; i < 6; i++) {
  result += chars.charAt(Math.floor(Math.random() * charsLength));
   }
  return result;
}

function createQuiz() {
  // generate a random page URL for the quiz
  const quizUrl = generatePageUrl();
}

module.exports(createQuiz);
