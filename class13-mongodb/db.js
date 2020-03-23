// db.js
// schema
// register model
// connect
const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
  name: {type: String, required: true}
,
  lives: {type: Number, required: true}
});

mongoose.model('Cat', CatSchema);
mongoose.connect('mongodb://localhost/class13', {useNewUrlParser: true, useUnifiedTopology: true});

