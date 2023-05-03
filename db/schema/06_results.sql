DROP TABLE IF EXISTS results CASCADE;
CREATE TABLE results (
  id SERIAL PRIMARY KEY NOT NULL,
  userId INTEGER REFERENCES users(id) ON DELETE CASCADE,
  questionId INTEGER REFERENCES questions(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  answersId INTEGER REFERENCES answers(id) ON DELETE CASCADE
);
