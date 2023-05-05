DROP TABLE IF EXISTS answers CASCADE;
CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_id INTEGER REFERENCES questions(id) ON DELETE CASCADE,
  answer1 VARCHAR(255) NOT NULL,
  answer2 VARCHAR(255) NOT NULL,
  answer3 VARCHAR(255) NOT NULL,
  answer4 VARCHAR(255) NOT NULL,
  is_correct TEXT NOT NULL
);
