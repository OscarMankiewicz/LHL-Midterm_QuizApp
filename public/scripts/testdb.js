//testing below
const { Client } = require('pg');
const ejs = require('ejs');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'template1'
});


pool.query(`
SELECT * from Quiz;
`)
.then(res => {
  console.log(res);
})
.catch(err => console.error('query error', err.stack));

console.log ("hi")





