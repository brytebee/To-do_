const editItem = (list, task, textHolder) => {
  document.body.innerHTML = `
  <span class="addSpan d-flex parent-flex">
    <input type="text" name="addItem" class="addList double-line-height child-flex-large"
      placeholder="Add to your list...">
    <button class="addBtn child-flex-small bg-success"><i class="fas fa-level-down-alt fa-rotate-90"></i></button>
  </span>
  <div id="root"></div>`;

  textHolder = document.querySelector('.addList');
  textHolder.value = 'some statement';
  task = document.createElement('div');
  task.append(textHolder);
  list = document.createElement('div');
  list.append(task);
  textHolder.value = 'some state...';
  return textHolder.value;
};

export default editItem;