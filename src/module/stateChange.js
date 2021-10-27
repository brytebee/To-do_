const stateChange = (e, index, state) => {
  if (e.target.checked) {
    state = true;
  } else {
    state = false;
  }
};

export default stateChange;
