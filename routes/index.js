var express = require('express');
var router = express.Router();
var Book = require('../models/book');
/* GET home page. */
router.get('/', function (req, res, next) {
  Book.find().exec(function (err, results) {
    if (err) {
      res.send(err);
      return console.error(err);
    }
    res.render('index', { title: 'Acity Bookshop', books: results })
  })
});

router.post('/create', function (req, res, next) {
  var newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    publisher: req.body.publisher
  });

  newBook.save(function (err, result) {
    if (err) return res.send(err);
    console.log(result)
    res.redirect('/')
  })
})

router.get('/book/:id', function (req, res, next) {
  // req.params.id
})
module.exports = router;
