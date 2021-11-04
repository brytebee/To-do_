const removeItem = () => {
  document.body.innerHTML = `
  <span class="addSpan d-flex parent-flex">
      <input type="text" name="addItem" class="addList double-line-height child-flex-large"
        placeholder="Add to your list...">
      <button class="addBtn child-flex-small bg-success"><i class="fas fa-level-down-alt fa-rotate-90"></i></button>
    </span>
    <div id="root"></div>`;

  const input = document.querySelector('.addList');
  input.value = 'one';
  const contentHolder = document.createElement('div');
  contentHolder.textContent = input.value;
  const list = document.getElementById('root');
  list.append(contentHolder);
  list.remove(contentHolder);
  const wrapperChildren = Array.from(document.querySelectorAll('#root div'));
  return wrapperChildren;
};

export default removeItem;