const updateIndex = (list) => {
  document.body.innerHTML = `
  <span class="addSpan d-flex parent-flex">
    <input type="text" name="addItem" class="addList double-line-height child-flex-large"
      placeholder="Add to your list...">
    <button class="addBtn child-flex-small bg-success"><i class="fas fa-level-down-alt fa-rotate-90"></i></button>
  </span>
  <div id="root"></div>`;
  
  list = [];
  class Item {
    constructor(description, list) {
      this.completed = false;
      this.description = description;
      this.index = list.length + 1;
    }
  }

  const input = new Item('one', list);
  list.push(input.index);
  const input2 = new Item('two', list);
  list.push(input2.index);
  list.pop(); // remove the index = 2
  const input3 = new Item('three', list);
  list.push(input3.index);
  return list;
};

export default updateIndex;
