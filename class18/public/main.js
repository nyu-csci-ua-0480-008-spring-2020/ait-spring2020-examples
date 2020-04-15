const div = document.querySelector('#foo');
div.textContent = 'changed!!!!!';


const h1 = document.createElement('h1');
h1.textContent = 'from main js????';
document.body.appendChild(h1);
