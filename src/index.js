import stateChange from './module/stateChange.js';
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

    const listDiv = document.createElement('div');
    listDiv.className = 'list d-flex parent-flex b-border';

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'child-flex-large';

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'check';
    check.addEventListener('change', (e) => stateChange(e, item));

    const descriptionSpan = document.createElement('span');
    descriptionSpan.className = 'description';
    descriptionSpan.textContent = item.description;

    const iconsDiv = document.createElement('div');
    iconsDiv.className = 'child-flex-small';

    const optionsSpan = document.createElement('span');
    optionsSpan.className = 'options';
    optionsSpan.innerHTML = '<i class="fas fa-ellipsis-v"></i>';

    const trashSpan = document.createElement('span');
    trashSpan.className = 'trash hidden';
    trashSpan.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

    const taskCompleteSpan = document.createElement('span');
    taskCompleteSpan.className = 'done hidden';
    taskCompleteSpan.innerHTML = '<i class="fas fa-check"></i>';

    descriptionDiv.append(check, descriptionSpan);
    iconsDiv.append(optionsSpan, trashSpan, taskCompleteSpan);

    listDiv.append(descriptionDiv, iconsDiv);

    li.appendChild(listDiv);

    // li.innerHTML = `
    //   <div class="list d-flex parent-flex b-border">
    //     <div class="child-flex-large">
    //       <input type="checkbox" name="check" class="check">
    //       <span class="description">${item.description}</span>
    //     </div>
    //     <div class="child-flex-small">
    //       <span class="options"><i class="fas fa-ellipsis-v"></i></span>
    //       <span class="trash hidden"><i class="fa fa-trash" aria-hidden="true"></i></span>
    //       <span class="done hidden"><i class="fas fa-check"></i></span>
    //     </div>
    //   </div>`;
    ul.append(li);
    root.append(ul);
  });
};

populateRoot(lists);
