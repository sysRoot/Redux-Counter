import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case INCREMENT:
      return newState = { count: newState.count++ }
    case DECREMENT:
        return newState = { count: newState.count-- }
    default:
      return state;
  }
};
