// Client facing scripts here

const express = require('express');
const router  = express.Router();

router.get ('/search', (req, res) => { //cant get to work rn
  const searchText = req.query.text

  res.redirect ('/')
});

router.post ('/search', (req,res) => {
  res.redirect ('/')
});
