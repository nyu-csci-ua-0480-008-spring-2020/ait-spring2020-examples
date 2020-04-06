const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {type: String, required: true, maxlength: 20},
  content: {type: String, required: true}
});


mongoose.model('Article', ArticleSchema);
mongoose.connect('mongodb://localhost/');
