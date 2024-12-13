let defaultState = {
  counter: 0,
  login: false,
};

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "minus":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
