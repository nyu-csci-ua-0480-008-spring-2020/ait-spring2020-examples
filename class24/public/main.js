// main.js
document.addEventListener("DOMContentLoaded", main);

function getMessages() {
  console.log('retrieving messages w/ xhr');
  const xhr = new XMLHttpRequest();
  // arguments are: method and url
  // to retrieve all messages from our api
  xhr.open('GET', 'api/messages');
  xhr.addEventListener('load', function() {
    console.log(xhr.status, xhr.responseText);
    // what happens when we get a response back
    if(xhr.status >= 200 && xhr.status < 400) {
      // we know we have a response
      // xhr.responseText
      const messages = JSON.parse(xhr.responseText);
      const msgDiv = document.querySelector("#messages");
      msgDiv.textContent = '';
      for(const m of messages) {
        const p = document.createElement('p');
        p.textContent = m.msgText + ' ' + m.msgFrom;
        msgDiv.appendChild(p);
      }
    }
    // kind of recursive
    setTimeout(getMessages, 200);
  });
  xhr.send();
}

function handleClick(evt) {
  console.log('button clicked');
  // markup is contrived... form isn't actually needed
  // but because it's there we need to do this...
  evt.preventDefault();

  // retrieve data from form
  const msgText = document.querySelector("#msgText").value;
  const msgFrom = document.querySelector("#msgFrom").value;
  const xhr = new XMLHttpRequest();
  // add new message immediately after button click????
  // no don't it because we don't know if it saved yet
  xhr.open('POST', '/api/messages');

  // the content type of the body of our request
  // name1=value1&name2=value2
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  xhr.addEventListener('load', function() {
    console.log('post response', xhr.responseText);
    const m = JSON.parse(xhr.responseText).result;
    const msgDiv = document.querySelector("#messages");
    const p = document.createElement('p');
    p.textContent = m.msgText + ' ' + m.msgFrom;
    msgDiv.appendChild(p);
  });
  // argument to send can be json string
  // but... content-type should be set appropriately
  xhr.send(`msgText=${msgText}&msgFrom=${msgFrom}`);
}
function main() {
// when we press the button, make a post request
  const btn = document.querySelector("#btn");
  btn.addEventListener('click', handleClick);
  getMessages();
}



















