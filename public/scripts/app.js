// Client facing scripts here

//for use later in making the quizurl
function generateUrl() {
  const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
  let quizUrl = '';
  for (let i = 0; i < 7; i++) {
    const randomUnit = Math.floor(Math.random() * alphabet.length);
    code += alphabet[randomUnit];
  }
  return quizUrl;
}

