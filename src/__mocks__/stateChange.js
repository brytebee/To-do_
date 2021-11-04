const stateChange = (task, list) => {
  document.body.innerHTML = `
  <span class="addSpan d-flex parent-flex">
    <input type="text" name="addItem" class="addList double-line-height child-flex-large"
      placeholder="Add to your list...">
    <button class="addBtn child-flex-small bg-success"><i class="fas fa-level-down-alt fa-rotate-90"></i></button>
  </span>
  <div id="root"></div>`;

  const text = document.createElement('p');
  text.value = 'two';
  const div = document.createElement('div');
  const checkbox = document.createElement('checkbox');
  checkbox.setAttribute('type', 'checkbox');
  let completed = false;
  div.appendChild(text);
  checkbox.isChecked = true;
  list = document.createElement('div');
  task = document.createElement('div');
  task.appendChild(div);
  list.appendChild(task);
  if (checkbox.isChecked) {
    task.style.textDecoration = 'line-through';
    completed = true;
  } else {
    task.style.textDecoration = 'none';
    completed = false;
  }
  return completed;
};

export default stateChange;
