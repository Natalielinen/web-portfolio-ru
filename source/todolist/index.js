let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

priority.onclick = function () {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
};

form.onsubmit = function (evt) {
  evt.preventDefault();
  let task = document.createElement('li');
task.textContent = input.value;
if (priority.classList.contains('is-important')) {
task.classList.add('is-important');
} else {
task.classList.remove('is-important');
}
list.append(task);
input.value = '';
};