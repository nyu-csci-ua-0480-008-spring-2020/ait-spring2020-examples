const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  msgText: String,
  msgFrom: String  
});
mongoose.model('Message', MessageSchema);
mongoose.connect('mongodb://localhost/sp20class23');
