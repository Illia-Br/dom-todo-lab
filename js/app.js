
// Cashed element references
const inputEl = document.getElementById('inp');
const addButtonEl = document.querySelector('#submit-button');
const ulEl = document.querySelector('ul');
const resetButtonEl = document.querySelector('#reset-button');

// Event Listeners

addButtonEl.addEventListener('click', function(evt) {
  let newLi = document.createElement('li');
  newLi.textContent = inputEl.value;
  inputEl.value = '';
  let checkAllSpaces = newLi.textContent.split('').every(element => element === ' '); // checks if input is spaces only
  if (newLi.textContent && !checkAllSpaces) {
    ulEl.appendChild(newLi);
    newLi.addEventListener('click', function() {this.remove();}); // this event listener allows to delete li elements individually
  }
})

resetButtonEl.addEventListener('click', function(evt) {
  let allLis = document.querySelectorAll('#todo-list li');
  allLis.forEach(li => li.remove());
  inputEl.value = '';
})

// ulEl.addEventListener('click', function(evt) {
//   evt.target.remove();
// })   <------- if user accidentally hit ul element this event listener will delete the hole list

