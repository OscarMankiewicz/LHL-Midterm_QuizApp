
--test code
-- Insert question1 and answers //

INSERT INTO users (id, name, password)
VALUES (01,'admin', 'password');

INSERT INTO quiz (user_id, id, name, title, question1, question2)
VALUES (01, 01, 'Anime', 'Anime', 'Most Highly Rated Anime', 'Most popular anime of 2021');

INSERT INTO questions (quiz_id, id, question)
VALUES (01,01,'Most Highly Rated Anime');

INSERT INTO questions (quiz_id, id, question)
VALUES (01,02,'Most popular anime of 2021');

-- Obtain the question1 id
SELECT id FROM questions WHERE quiz_id = 01 ;

-- Insert answers for question1
INSERT INTO answers (answer1, answer2, answer3, answer4, is_correct, question_id)
VALUES ('FMA', 'Naruto', 'OnePiece', 'Bleach', 'FMA', 1);

-- Insert results for question1
INSERT INTO results (userId, questionId, content, answersId)
VALUES (01, 1, 'Most Highly Rated Anime', 1);

-- Insert answers for question2
INSERT INTO answers (answer1, answer2, answer3, answer4, is_correct, question_id)
VALUES ('Demonslayer', 'Jujutsu Kaisen', 'One Piece', 'Naruto', 'Demonslayer', 2);

-- Obtain the answers id
SELECT id FROM answers WHERE answer1 = 'Demonslayer' AND answer2 = 'Jujutsu Kaisen' AND answer3 = 'One Piece' AND answer4 = 'Naruto';

-- Insert results for question2
INSERT INTO results (userId, questionId, content, answersId)
VALUES (01, 2, 'Most popular anime of 2021', 2);

-- add $1 and etc for placeholders
