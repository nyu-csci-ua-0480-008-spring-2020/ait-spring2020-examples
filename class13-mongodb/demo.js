// require
const mongoose = require('mongoose');

// define documents that you store (schema)
const CatSchema = new mongoose.Schema({
  // keys will be props that all your docs will have
  // values are the types of the value stored in that prop
  name: {type: String, required: true}
,
  lives: {type: Number, required: true}
});

// "register" them as models in mongoose
mongoose.model('Cat', CatSchema);
const Cat = mongoose.model('Cat'); // this is now the constructor
// model --> analogous to a collection ... a constructor to create a document in a collection

// attempt to insert into database
// default collection: name of model pluralized and lower

Cat.find({name: 'kitty purry'}, (err, foundCats) => {
  console.log('err', err, foundCats, 'count');
});
/*
const c = new Cat({
  name: 'kitty purry',
  lives: 5
});
c.save((err, savedCat, count) => {
  console.log(savedCat);
});
*/

// connect
mongoose.connect('mongodb://localhost/class13', {useNewUrlParser: true, useUnifiedTopology: true});


/*

use diff clients to contect to mongodb... some clients:

* mongo - cli client
* mongoose - Object Document Mapper
  * gives you actual js objects
  * based the documents stored in database
  * enforces types and properties for your documents
  * allows you to connect to a running instance of mongodb
  * there's a lot of setup (because you're creating a "schema" or blueprint for docs)
* mongodb has their own official library



you may want to reference a file location from your database rather than store that data in the database:

* if file is very large
* images, other "web resources" (store the url to the image in the database... image goes s3 bucket)
  * serve images quickly, so slow if having to hit database (instead use something specializes in serving assets -- a cdn, amazon s3, etc.)
*
an instance of mongodb
can have multiple databases
can have collections
collections contain multiple documents

mongodb -> databases -> collections -> documents -> key / value

mongodb
(mongod <--- dbms database management system... handling connections, basic create, update, delete, etc. ... it stores data somewhere in some format specific to mongodb... that storage is the database .... or one of many databases)



 */
