const  express = require('express');
const  router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Music App!' });
});

router.get('/songs', function(req, res, next) {
  res.render('songs', { title: 'Song Comments' });
});

router.get('/comments', function(req, res, next) {
  res.render('comments', { title: 'Comments' });
});

router.get('/oAuth', function(req, res, next) {
  res.render('oAuth', { title: 'UNDER CONSTRUCTION' });
});


module.exports = router;
