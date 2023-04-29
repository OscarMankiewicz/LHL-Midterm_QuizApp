DROP TABLE IF EXISTS quiz CASCADE;
CREATE TABLE quiz (
  id SERIAL PRIMARY KEY NOT NULL,
  userId INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL
);
