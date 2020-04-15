javascript

* backend js (server): node, node w/ express <--- backend can be whatever language you want
* frontend js (client): js that runs in the browser <--- typically js, but soon to be others

frontend js has different global objects:
* doesn't have global process, fs for working w/ file system or net module for creating servers
* document, window, http request to a server

language itself is the same, but some apis are different


frontend javascript comes with DOM manipulation

document object model --> API that is platform (and language) agnostic
manipulate an html document
API should be consistent... add elements, modify elements, add interactivity, etc.

<a></a>

tags (start and end tag)
<div class="foo"></div>
div element
class is attribute

css rule 


selector
|
h1 {
	color: 'red';
}

#foo {
	font-size: 2em;
}

.num {


}


html as structure and semantic meaning of your content:

* is it an article
* is it a header etc...

css layout and style

* increase font size
* make background pink

for layout:

* display: block, inline, inline-block, none
	* there are others (display like a table row... as a list item)
* position: static (default), relative, absolute, fixed
	* can you use top, bottom, left, and right as offsets
	* if it's static, regular flow
	* relative... relative to where it would be positioned





inline elements

* no width (with wraps content)
* can't specify width and height
* adjacent to each other
* a, span, em

block elements

* take up as much width as it can
* they have a width and a height
* they appear stacked (block element goes on new line)



















