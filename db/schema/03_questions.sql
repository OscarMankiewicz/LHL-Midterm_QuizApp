DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id SERIAL PRIMARY KEY NOT NULL,
  userId INTEGER REFERENCES users(id) ON DELETE CASCADE,
  quizId INTEGER REFERENCES quiz(id) ON DELETE CASCADE,
  content =
  answersId INTEGER REFERENCES answers(id) ON DELETE CASCADE
);
