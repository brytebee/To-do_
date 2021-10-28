import { saveInStorage } from './storage';


const editItem = (list, task, textHolder) => {
  task.description = textHolder.textContent;
  saveInStorage(list);
};

export default editItem;