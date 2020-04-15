AGENDA
====

* quickly continue with css... positioning, display (layout), selectors
* how to include client side js
* manipulating elements with client side js
* css and js
* events and timers



manipulating styles w/ js
=====
you can use styles to access specific css properties, like color, backgroundColor, etc.
if prop has - in it, camel case and -'s removed
^^^ primitive
mixing styling with actual code
element.style.prop = ...

element.classList

prefer changing classlist over styles

retrieving elements:
=====
document.getElementById
document.getElementsByTagName
document.getElementsByClassName

document.querySelector('css selector here') // 1 element
document.querySelectorAll('css selector here') // all elements

innerHTML

* tedious to handwrite tags
* maybe error prone
* mixing html directly in your code

* document.createElement
* element.appendChild


browser will pause rendering when it encounters
script tag ... run that code

perhaps script tag will change what has rendered 
previously
























