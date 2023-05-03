-- Users table seeds here (Example)
INSERT INTO users (name) VALUES ('Alice');
INSERT INTO users (name) VALUES ('Kira');


--test code
-- Insert question1 and answers // might need a quizurl randomizer later

INSERT INTO users (id, name, password)
VALUES (01,'admin', 'password');


INSERT INTO quiz (user_id, id, name, title)
VALUES (01, 01, 'Anime', 'Anime');

INSERT INTO questions (user_id, quiz_id, question1, question2)
VALUES (01, 01, 'Most Highly Rated Anime', 'Most popular anime of 2021');

-- Obtain the question1 id
SELECT id FROM questions WHERE user_id = 01 AND quiz_id = 01 AND question1 = 'Most Highly Rated Anime';

-- Insert answers for question1
INSERT INTO answers (answer1, answer2, answer3, answer4, is_correct)
VALUES ('FMA', 'Naruto', 'OnePiece', 'Bleach', 'FMA');

-- Insert results for question1
INSERT INTO results (userId, questionId, content, answersId)
VALUES (01, 4, 'Most Highly Rated Anime', 1);

-- Insert answers for question2
INSERT INTO answers (answer1, answer2, answer3, answer4, is_correct)
VALUES ('Demonslayer', 'Jujutsu Kaisen', 'One Piece', 'Naruto', 'Demonslayer');

-- Obtain the answers id
SELECT id FROM answers WHERE answer1 = 'Demonslayer' AND answer2 = 'Jujutsu Kaisen' AND answer3 = 'One Piece' AND answer4 = 'Naruto';

-- Insert results for question2
INSERT INTO results (userId, questionId, content, answersId)
VALUES (01, 4, 'Most popular anime of 2021', 2);
