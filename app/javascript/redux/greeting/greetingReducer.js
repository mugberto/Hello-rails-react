const GREET = 'GREET';

const greetingReducer = (state={}, action ) => {
  switch(action.type) {
    case GREET:
      return { message: action.payload };
    default:
      return state;
    break;
  }
}

const greet = (message) => {
  console.log(message)
  return ({ type: GREET, payload: message });
}

export const randomMessage = () => (dispatch) => {
  fetch('http://localhost:3000/v1/greet')
    .then((response) => response.json())
    .then((json) => dispatch(greet(json.message)));
}

export default greetingReducer;