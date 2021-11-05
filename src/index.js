import add from './addItem.js';
import clearAll from './clearAll.js';
import display from './display.js';
import getFromStorage from './storage.js';
import './style.css';

document.querySelector('.addBtn').addEventListener('click', () => {
  add();
});

document.querySelector('.clear').addEventListener('click', () => clearAll(getFromStorage()));

const lists = [
].sort((a, b) => b.index - a.index);

if (!JSON.parse(localStorage.getItem('to-do'))) {
  localStorage.setItem('to-do', JSON.stringify(lists));
}

const storageList = JSON.parse(localStorage.getItem('list'));

if (storageList) {
  display(storageList);
}
