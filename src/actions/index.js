export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  console.log(`have I even fired?`)

    return {type: 'INCREMENT'}
};

export const decrement = counter => {
  console.log(`have I also fired?`)

    return {type: 'DECREMENT'}
};
