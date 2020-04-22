document.addEventListener("DOMContentLoaded", main);

// a frontend framework, react
// served on one web app


// a backend on another application



function main() {
  // XMLHttpRequest  <-- built in
  // fetch <-- built in, uses promises
  // many libraries that you can use
  // axios
  // supertest
  // jquery
  const xhr = new XMLHttpRequest();  
  const url = 'http://localhost:3000/api/messages';
  // const url = 'https://api.github.com/users/foureyes/repos';
  // const url = 'https://cs.nyu.edu/home/index.html';
  xhr.open('GET', url); // configure a request

  // addEvent.... 'load', 'error'
  xhr.addEventListener('load', function() {
    console.log(xhr.status, xhr.responseText);
    if(xhr.status >= 200 && xhr.status < 400) {
      const messages = JSON.parse(xhr.responseText);
      for(const m of messages) {
        const p = document.createElement('p');
        p.textContent = m.content + ' ' + m.name;
        document.body.appendChild(p);
      }
    }
  });
  xhr.send(); // MAKE the actual request

}





