{
	name: Foo Bar
	content: baz qux
	slug: foo-bar

}
{
	name: Foo Bar
	content: something different
	slug: foo-bar-2

}
{
	name: corge quxxxxx
	content: some more content
}

const ArticleSchema  = new mongoose.Schema({
	name:  {type: String, required: true},
	content: String,
	// no slug defined explicitly
})

ArticleSchema.plugin(URLSlugs(name)) // slug field does not have to be explicitly added to schema
// (will be created each time article is inserted)


// reference some existing field or fields
// use it to construct a new prop
// new prop will be lowercase underscore of fields specified

const a = new Article({
	name: some title
	content: ...
}) 
// actual article will have a 3rd prop called slug:
// some-title
// a.slug // some-title

// slug is autogen
{{#each articles as |a|}}
<a href="/{{a.slug}}">{{a.name}}</a>
// mysite.me/some-title
{{/each}}









unique identifier for each document

* object id - created for you ... looks like a series of random characters
* name of the article - duplicate names, special characters may make it difficult to read url
	* mysite.me/foo%20bar
* slug - human readable unique id
	* lower case version of the article name with -'s replacing spaces, special chars stripped
	* append incrementing number to end

why unique id that's human readable?
so we can use it in our url.... use that part of the path to find a specific document
...

mongoose is extensible through plugin system

* automatically create properties on your documents
* created_at that will be added with a date of now() when doc is inserted
* create a prop based on another property















