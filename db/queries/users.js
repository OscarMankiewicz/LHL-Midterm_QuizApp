const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};


//store functions here


    // con.connect(function(err) {
    //   if (err) throw err;
    //   console.log("Connected!");
    //   let sqlTopic = `INSERT INTO questions (question) VALUES ($("#title-maker").val())`;
    //   let sqlQuestion = `INSERT INTO questions (question) VALUES ($1)`;
    //   let sqlAnswer = `INSERT INTO answers (question) VALUES ($("#Answer"+questionCounter+"-1").val())`;
    //   con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted");
    //   });
    // });

module.exports = { getUsers };
