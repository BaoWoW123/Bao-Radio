var express = require('express');
var router = express.Router();
const { body, check, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'For Me Only' });
});

router.post('/upload', function(req, res, next) {
  console.log(req.body, '+++++', req.body.file)
  res.render('upload', { title: 'For Me Only' });
});

/* 
router.post('/upload', [
  body('file').custom((value, { req }) => {
    const file = req.files.file;
    console.log(file)
    if (!file || file.mimetype !== 'audio/mpeg') {
      throw new Error('Must be in MP3 format')
    }
    return true;
  })
], async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const file = req.files.file;
  console.log(file)
  return res.render('index', { title: 'Express' })
}) */
module.exports = router;
