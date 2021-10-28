const stateChange = (e, list, li, lists) => {
  if (e.target.checked) {
    list.completed = true;
    li.classList.add('strike-out');
  } else {
    list.completed = false;
    li.classList.remove('strike-out');
  }
  localStorage.setItem('list', JSON.stringify(lists));
};

export default stateChange;
