



const btn = document.querySelector("#btn");

btn.addEventListener('click', handleClick);

function handleClick(evt) {
  const username = document.querySelector("#username").value;
  const xhr = new XMLHttpRequest();
  // configuration
  // req method
  // url that we're retrieving
  // xhr.open('GET', 'https://api.github.com/users/' + username + '/repos');
  xhr.open('GET', 'http://cs.nyu.edu');

  xhr.addEventListener('load', function() {
    // on response
    // xhr is populated with
    // responseText
    // status
    if(xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.responseText);
      const repos = JSON.parse(xhr.responseText);
      for(const repo of repos) {
        const div = document.createElement('div');
        div.textContent = repo.name;
        document.body.appendChild(div);


      }
    }
  });
  // deal with timeouts or domain not existing
  // xhr.addEventListener('error'...)

  // remember to do this to actually make request!!!
  xhr.send();
}


