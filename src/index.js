import './style.css';

const root = document.querySelector('#root');

const lists = [
  {
    description: 'Breakfast',
    completed: false,
    index: 15,
  },
  {
    description: 'Lunch',
    completed: false,
    index: 10,
  },
  {
    description: 'Diner',
    completed: false,
    index: 12,
  },
].sort((a, b) => a.index - b.index);

const populateRoot = (array) => {
  array.forEach((item) => {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="list d-flex parent-flex b-border">
        <div class="child-flex-large">
          <input type="checkbox" name="check" class="check">
          <span class="description">${item.description}</span>
        </div>
        <div class="child-flex-small">      
          <span class="options"><i class="fas fa-ellipsis-v"></i></span>
          <span class="trash hidden"><i class="fa fa-trash" aria-hidden="true"></i></span>
          <span class="done hidden"><i class="fas fa-check"></i></span>
        </div>
      </div>`;
    ul.append(li);
    root.append(ul);
  });
};

populateRoot(lists);
