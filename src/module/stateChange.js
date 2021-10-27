const stateChange = (e, list) => {
  if (e.target.checked) {
    list.completed = true;
  }
};

export default stateChange;
