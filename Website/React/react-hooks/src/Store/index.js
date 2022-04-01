import { createStore } from "redux";

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INC":
      return { counter: state.counter + 1 };
    case "DEC":
      return { counter: state.counter - 1 };
    case "ADD_10":
      return { counter: state.counter + 10 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
