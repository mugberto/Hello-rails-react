const GREET = 'GREET';

const greetingReducer = (state={}, action ) => {
  switch(action.type) {
    case GREET:
      return action.payload;
    default:
      return state;
    break;
  }
}

const greet = (message) => ({ type: GREET, payload: message });

export const randomMessage = () => (dispatch) => {
  fetch('http://localhost:3000/greet')
    .then((response) => response.json())
    .then((json) => dispatch(greet(json.message)));
}

export default greetingReducer;