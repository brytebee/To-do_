import { saveInStorage } from './storage.js';

const updateIndex = (list) => {
  let counter = 1;
  list.forEach((task) => {
    task.index = counter;
    counter += 1;
  });
  saveInStorage(list);
  return list;
};

export default updateIndex;