// all of the elements in the DOM
// have event target somewhere in its prototype
// event target .... addEventListener
// call addEventListener on elements
// allows registering of event handler for a specific event
// DOMContentLoaded
// click
// first arg for addEventListener is string version of event name
// some function <--- will be called when event is triggered
// some elements already have default action
// applied
// click handler
// input type="submit" within a form
// makes the browser make a request and go to that next page
// a ^^^^
document.addEventListener('DOMContentLoaded', main);

function main() {
  const h1 = document.querySelector('#clickable');
  const btn = document.querySelector('#btn');

  btn.addEventListener('click', handleClick);
  h1.addEventListener('click', handleClickHeader); 
}
// faster when inlining
// 2 + requests for external file
// 1 request
// multiple script tags that reference
// multiple external files
// google maps api
// + bootstrap 
// + some other library
// we want external files, but we don't want to 
// make 100 requests for a single page
// concatenate files
// minify files
// cdn
// if you're using bootstrap on your site from a cdn
// there's a chance that another site uses same cdn

// TODO:
// remove
// web performance strategies
// meetup group nyc web performance
// x classlist.toggle
// x ways around retrieving element: 
// x evt.target
// x this: ...this will reference the element clicked on
function handleClickHeader(evt) {
  console.log('clicked', evt.x, evt.y);
  // evt.target to reference thing that was clicked
  // this will reference the element that generated 
  // event... which is why event handler shouldn't
  // be arrow function
  // this.remove();
  this.classList.toggle('clicked');
  // classList add, remove, toggle
  //const h1 = document.querySelector('#clickable');
  // h1.classList.add('clicked');
}
// function call -> this is global
// method call -> this is instance
// arrow function -> ??? whatever this was when 
// arrow function was created
// when button is clicked... 
// take what's in form
// greet that person
// |Joe| Submit
// Hi Joe
// no round trip to server necessary!
// this should appear in new element
function handleClick(evt) {
  evt.preventDefault();
  const name = document.querySelector("#name").value;
  const ele = document.createElement('em');
  ele.textContent = 'Hello ' + name;
  document.body.appendChild(ele);
  // console.log('clicked the button', name);

}














