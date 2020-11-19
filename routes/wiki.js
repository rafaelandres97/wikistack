const express = require('express');
// const { route } = require('./users');
const router = express.Router();
const { addPage } = require('../views');

router.get('/', (req, res, next) => {
  res.send('you found the main page!')
});

router.post('/', (req, res, next) => {
	res.json(req.body);
});

router.get('/add', (req, res) => {
	res.send(addPage());
});

module.exports = router;
