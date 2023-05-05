-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- if needed, below resets the tables, but doesnt reset serial
-- TRUNCATE TABLE results CASCADE;
-- TRUNCATE TABLE questions CASCADE;
-- TRUNCATE TABLE quiz CASCADE;
-- TRUNCATE TABLE users CASCADE;
-- TRUNCATE TABLE answers CASCADE;



Used to reset whole table and serial ids
-- DROP TABLE IF EXISTS users CASCADE;
-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL
-- );

-- DROP TABLE IF EXISTS quiz CASCADE;
-- CREATE TABLE quiz (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   quiz_url VARCHAR(255);
--   name VARCHAR(255) NOT NULL,
--   title VARCHAR(255) NOT NULL,
--   question1 VARCHAR(255) NOT NULL,
--   question2 VARCHAR(255) NOT NULL,
--   question3 VARCHAR(255),
--   question4 VARCHAR(255),
--   question5 VARCHAR(255)
-- );

-- DROP TABLE IF EXISTS questions CASCADE;
-- CREATE TABLE questions (
--   id SERIAL PRIMARY KEY NOT NULL,
--   quiz_id INTEGER REFERENCES quiz(id) ON DELETE CASCADE,
--   question TEXT
-- );

-- DROP TABLE IF EXISTS answers CASCADE;
-- CREATE TABLE answers (
--   id SERIAL PRIMARY KEY NOT NULL,
--   answer1 VARCHAR(255) NOT NULL,
--   answer2 VARCHAR(255) NOT NULL,
--   answer3 VARCHAR(255) NOT NULL,
--   answer4 VARCHAR(255) NOT NULL,
--   is_correct TEXT NOT NULL
-- );

-- DROP TABLE IF EXISTS results CASCADE;
-- CREATE TABLE results (
--   id SERIAL PRIMARY KEY NOT NULL,
--   userId INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   questionId INTEGER REFERENCES questions(id) ON DELETE CASCADE,
--   content TEXT NOT NULL,
--   answersId INTEGER REFERENCES answers(id) ON DELETE CASCADE
-- );

