
--test code
-- Insert question1 and answers //

INSERT INTO users (id, name, password)
VALUES (01,'admin', 'password');

INSERT INTO quiz (user_id, id, name, title, quizURL, question1, question2)
VALUES (01, 01, 'Anime', 'Anime', 1, 'Most Highly Rated Anime', 'Most popular anime of 2021');

INSERT INTO questions (quiz_id, id, question)
VALUES (01,01,'Most Highly Rated Anime');

INSERT INTO questions (quiz_id, id, question)
VALUES (01,02,'Most popular anime of 2021');

-- Obtain the question1 id
SELECT id FROM questions WHERE quiz_id = 01 ;

-- Insert answers for question1
INSERT INTO answers (question_id, answer1, answer2, answer3, answer4, is_correct)
VALUES (1, 'FMA', 'Naruto', 'OnePiece', 'Bleach', 'FMA');

-- Insert results for question1
INSERT INTO results (userId, questionId, content, answersId)
VALUES (01, 1, 'Most Highly Rated Anime', 1);

-- Insert answers for question2
INSERT INTO answers (question_id, answer1, answer2, answer3, answer4, is_correct )
VALUES (2,'Demonslayer', 'Jujutsu Kaisen', 'One Piece', 'Naruto', 'Demonslayer');

-- Obtain the answers id
SELECT id FROM answers WHERE answer1 = 'Demonslayer' AND answer2 = 'Jujutsu Kaisen' AND answer3 = 'One Piece' AND answer4 = 'Naruto';

-- Insert results for question2
INSERT INTO results (userId, questionId, content, answersId)
VALUES (01, 2, 'Most popular anime of 2021', 2);

-- add $1 and etc for placeholders


INSERT INTO quiz (user_id, id, name, title, question1, question2)
VALUES (01, 03, 'Anime2', 'Anime2', 'Most Highly Rated Anime2', 'Most popular anime of 20212');

INSERT INTO questions (quiz_id, question)
VALUES (03,'Most Highly Rated Anime2');

INSERT INTO questions (quiz_id, id, question)
VALUES (03,04,'Most popular anime of 20212');

-- Obtain the question1 id
SELECT id FROM questions WHERE quiz_id = 01 ;

-- Insert answers for question1
INSERT INTO answers (question_id, answer1, answer2, answer3, answer4, is_correct)
VALUES (3, 'FMA', 'Naruto', 'OnePiece', 'Bleach', 'FMA');

-- Insert results for question1
INSERT INTO results (userId, questionId, content, answersId)
VALUES (02, 3, 'Most Highly Rated Anime', 3);

-- Insert answers for question2
INSERT INTO answers (question_id, answer1, answer2, answer3, answer4, is_correct )
VALUES (3,'Demonslayer', 'Jujutsu Kaisen', 'One Piece', 'Naruto', 'Demonslayer');

-- Obtain the answers id
SELECT id FROM answers WHERE answer1 = 'Demonslayer' AND answer2 = 'Jujutsu Kaisen' AND answer3 = 'One Piece' AND answer4 = 'Naruto';

-- Insert results for question2
Se
