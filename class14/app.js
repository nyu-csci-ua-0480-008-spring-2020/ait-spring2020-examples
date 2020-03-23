require('./db.js');
// retrieve constructor
const mongoose = require('mongoose');
const Article = mongoose.model('Article');

const express = require('express');
const app = express();
app.set('view engine', 'hbs');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
// create a path for a form to add articles
// form and articles on same page
app.get('/', (req, res) => {
  // shows form
  // show articles too
  Article.find({}, (err, articles) => {
    res.render('article', {articles: articles});
  });
});
app.post('/', (req, res) => {
  const a = new Article({
    title: req.body.title,
    content: req.body.content
  });
  a.save((err, savedArticle) => {
    console.log(err, savedArticle);
    res.redirect('/');
  });

});
app.listen(3000);
