var express = require('express');
var router = express.Router();
const axios = require('axios');
const endpoint = 'https://api.github.com/search/users';

/* GET users listing. */
router.post('/search', function(req, res, next) {
  const username = req.body.username;
  axios.get(`${endpoint}?q=${username}`)
  .then(response => {
    console.log('data', response.data);
    res.json(response.data);
  })
  .catch(err => {
    res.json(err);
  });
  // res.send('respond with a resource');
});

module.exports = router;
