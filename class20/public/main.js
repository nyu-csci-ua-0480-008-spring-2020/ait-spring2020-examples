


// script tag can have attributes like defer
// async
// async allos script to run while dom is being rendered
// defer... i think that waits until the end
document.addEventListener('DOMContentLoaded', main);

function main() {
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', function(evt) {
     evt.preventDefault();
    const name = document.querySelector("#name").value;
    console.log(name);
    const h1 = document.createElement('h1');
    h1.textContent = name;
    document.body.appendChild(h1);
  });
  console.log(btn);
  btn.value = 'press me';
}







