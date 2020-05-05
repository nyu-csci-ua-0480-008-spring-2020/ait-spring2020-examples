
/*
server ------------------------------>
       ^         | ^ |  ^           |
       |         | | |  |           |
       |        \/ | \/ |          \/
client ------------------------------>

const p = new Promise(function(fulfill, reject) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.addEventListener('load', fulfill(xhr));
  xhr.addEventListener('error', reject('error!!!!'));
  xhr.send
});

p.then(function() {}, function(){}) // then always returns a promise (the return value of fulfill / 1st arg)
// if that return value isn't a promise... it's a wrapped in a promise that calls fulfill with that value
.catch(function() {})
  
 */






async function getRepos(username) {
  const url = 'https://api.github.com/users/' + username + '/repos'
  const response = await fetch(url);
  const data = await response.json();
  handleResponse(data);
}
function handleResponse(repos) {             
  // console.log(repos);
  for(const repo of repos) {
    const em = document.createElement('em')
    em.textContent = repo.name;
    console.log(em);
    document.body.appendChild(em);
  }
}

getRepos('foureyes');

/*
function getRepos(username) {
  const url = 'https://api.github.com/users/' + username + '/repos'
  // promise is an object that represents some sort of async function
  fetch(url) // fetch returns a promise
    .then(response => response.json())  // resolved with a response object, then returns a promise
    .then(handleResponse);// promise above is fulfilled with parsed json (repos)
}
function handleResponse(repos) {             
  // console.log(repos);
  for(const repo of repos) {
    const div = document.createElement('div')
    div.textContent = repo.name;
    console.log(div);
    document.body.appendChild(div);
  }
}

getRepos('foureyes');
*/














