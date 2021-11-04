const clearAll = () => {
  document.body.innerHTML = `
  <span class="addSpan d-flex parent-flex">
    <input type="text" name="addItem" class="addList double-line-height child-flex-large"
      placeholder="Add to your list...">
    <button class="addBtn child-flex-small bg-success"><i class="fas fa-level-down-alt fa-rotate-90"></i></button>
  </span>
  <div id="root"></div>`;

  const input = document.querySelector('.addList');
  input.value = 'one';
  const checkbox = document.createElement('checkbox');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.isChecked = true;
  input.appendChild(checkbox);

  const input2 = document.querySelector('.addList');
  input2.value = 'two';
  checkbox.setAttribute('type', 'checkbox');
  checkbox.isChecked = false;
  input.appendChild(checkbox);

  const contentHolder = document.createElement('div');
  contentHolder.textContent = input.value;
  const contentHolder2 = document.createElement('div');
  contentHolder2.textContent = input2.value;
  const page = document.getElementById('root').appendChild(contentHolder, contentHolder2);
  if (checkbox.isChecked === true) {
    page.remove(contentHolder, contentHolder2);
  }
  const wrapperChildren = Array.from(document.querySelectorAll('#root div'));
  return wrapperChildren;
};

export default clearAll;