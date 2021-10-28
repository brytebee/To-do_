import display from './display.js';
import getFromStorage, { saveInStorage } from './storage.js';

class List {
  constructor(description, list) {
    this.completed = false;
    this.description = description;
    this.index = list.length + 1;
    this.id = `id${this.index}`;
  }
}

const indexUpdate = (list) => {
  let counter = 1;
  list.forEach((task) => {
    task.index = counter;
    counter += 1;
  });
  saveInStorage(list);
  return list;
};

const add = () => {
  if (document.querySelector('.addList').value !== '') {
    let list = getFromStorage();
    const newItem = new List(`${document.querySelector('.addList').value}`, list);
    list.push(newItem);
    saveInStorage(list);
    list = getFromStorage();
    list = indexUpdate(list);
    display(list);
    document.querySelector('.addList').value = '';
  }
};

const editItem = (list, task, textHolder) => {
  task.description = textHolder.textContent;
  saveInStorage(list);
};

export { add, indexUpdate, editItem };