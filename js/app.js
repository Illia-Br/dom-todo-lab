
// Cashed element references
const inputEl = document.getElementById('inp');
const buttonEl = document.querySelector('#submit-button');
const ulEl = document.querySelector('ul');

// Event Listeners

buttonEl.addEventListener('click', function(evt) {
  let newLi = document.createElement('li');
  newLi.textContent = inputEl.value;
  inputEl.value = '';
  ulEl.appendChild(newLi);
})

console.log(inputEl);