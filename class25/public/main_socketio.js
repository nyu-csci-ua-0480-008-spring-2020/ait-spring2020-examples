// makes connection to current host
// this io function is here because of script src in html page
const socket = io();

// on to respond to events
// emit to send an event
// 2 args:
// name of the event (string that you create)
// payload / data ... some value


document.addEventListener("mousemove", function(evt) {
  // console.log(evt.x, evt.y);
  socket.emit('mouseMoved', {x: evt.x, y:evt.y});
});

const btn = document.querySelector("#btn");

btn.addEventListener('click', function() {
  // send something to server
  const msg = document.querySelector('#msg').value;
  // console.log('clicked', msg);
  socket.emit('clicked', {msg: msg});

});

socket.on('echo', function(data) {
  const div = document.body.appendChild(document.createElement('div'));
  div.textContent = data.msg;
});

socket.on('mouseMoved', function(data) {
  console.log(data);
	let otherMouse = document.getElementById(data.id);
	if (!otherMouse) {
		otherMouse = document.body.appendChild(document.createElement('div'));
		otherMouse.id = data.id;
		otherMouse.textContent = data.id;
		otherMouse.classList.add('otherMouse');
	}
	otherMouse.style.top = data.y + "px";
	otherMouse.style.left = data.x + "px";





});











