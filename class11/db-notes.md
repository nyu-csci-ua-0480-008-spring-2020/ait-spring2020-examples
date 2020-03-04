on someone else's computer (cloud)
in memory -- volatile, server restarts, application restart may lose data
in files (json) -- perhaps not optimized for simple reads and writes, current format data formats must be parsed
* "a service" ... no concurrent users
* no facility for authentication or authorization
* no "query" language unless we make our own
with a database
* relational
* transactions / unit of work
* atomic
* durable
* consistent data
* require planning before hand: what is the kind of data i'm storing (like the type of each field)
* nosql
* easy to use
* but not as "reliable" ... may _lose_ data (bad)
* no need to specify type of data, you can just start inserting data at will

* categories
* key value store
* riak
* memcache... name: value
* storing sessions
* document store
* couchdb
* mongodb
* value can be entire object
* web app data
* graph database
* object store

mongo.md:

* mongodb
* popular, standard for a particular tech stack: express, mongodb, ... react or vue or angular
* it's data format is json
* query lang is js
* low barrier of entry for you
* easy to set up (no auth is required)
* you don't have to define a "schema" ... just start inserting right away


