// momngodb -- database database management system
// mongoose -- ODM
const mongoose = require('mongoose');
// schema that describes article

// blueprint for documents
const ArticleSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: String
  // if we add required true for content, it will only affect to
  // articles coming in from this app
  // id: String
  // tags: [Tag]
  // date: Date
});

// register model ... means we make it available to be pulled out as a constructor
// create a new document with constructor, collection created containing that documented
// * many database
// * many collections -> collection name will be lowercase plural of Model
// * many documents
mongoose.model('Article', ArticleSchema); // collection name will be articles
mongoose.connect('mongodb://localhost/class14');
