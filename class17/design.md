{
	title: String,
	content: String
	author: String	

}
{
	title: zoom has privacy issues,
	content: they can see your stuff,
	slug: zoom-privacy-2,
	author: "joe versoza"
}
{
	title: why js is amazing
	content: ...
	slug: ...
	author: "joe versoza"
}
every article has 1 author
an author can write multiple articles?
one to many
{
	title: why js is amazing
	content: ...
	slug: ...
	author: ["joe versoza", "wills fann", "fj versoza"]
}
{
	title: String,
	content: String
	authors: [String]
}

Author
{
	first: String,
	last: String
}

Article
{
	title: String,
	content: String
	authors: [Author]
}

// only one document, but author is sub document in article
// only one collection in mongodb
// articles
{
	title: why js is amazing
	content: ...
	slug: ...
	authors: [{first: "🐼", last: "versoza"}, {first: "wills", last:"fann"}]
}
{
	title: zoom privacy issues
	content: ...
	slug: ...
	authors: [{first: "joe", last: "versoza"}, {first: "wills", last:"fann"}]
}
embedded documents
break apart blobs of strings... and have structured data
cons embedded docs:

* update anomaly: inconsistent data due to partial update
* redundant data, more space
* displaying unique values from embedded docs is more costly
Author
{
	first: String,
	last: String
}

Article
{
	title: String,
	content: String
	authors: [{type: Object id, ref: Article}]

}

//authors: {2: {first...}, 4: {}}
// unsure for mongoose support
// redundant data
// mongoose populate 
instance of article doc
{
	object_id: 123
	title: why js is amazing
	content: ...
	slug: ...
	authors: [2, 4]
}
instances of author docs
{
	object_id 2
	first: joe
	...
}
instances of author docs
{
	object_id: 4
	first: wills
	...
}

0. having unstructured strings as fields
1. embedding
	* redundant data
	* inconsistent updates
	* costly to display unique embedded docs
	* good: get all data at once

2. separate documents
authn: you are who you say you are

how do you prove you are who you are

* username and password
* mfa - something you know and something you have
* have some 3rd party vouch for you

authz: are you allowed to do some thing


user
{
	username: jversoza
	password: f67e......
	salt: 8dfsdl2
}

reg:
1. generate salt
2. prepend append to incoming password
3. hash combo
4. store both hash AND salt in the database

login:
1. search for username
2. add salt to incoming pw
3. hash combo
4. check if same hash



added to password prior to hashing
hash - 1 way
encrypt - you can get back to plain text
so hash!!!!
1. leave it to someone else (use current best practices, bcrypt)
2. computationally expensive, collision resistant





















