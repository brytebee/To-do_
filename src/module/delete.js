import { indexUpdate } from './crud.js';
import display from './display.js';
import getFromStorage, { saveInStorage } from './storage.js';

const removeItem = (list, task, display) => {
  list = list.filter((eachTask) => eachTask.index !== task.index);
  list = indexUpdate(list);
  saveInStorage(list);
  display(getFromStorage());
};

const clearAll = (list) => {
  list = list.filter((task) => task.completed !== true);
  saveInStorage(list);
  list = indexUpdate(getFromStorage());
  display(list);
}

export default removeItem;
export { clearAll };