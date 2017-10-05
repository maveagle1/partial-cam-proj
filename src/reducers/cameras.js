export default(state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_CAMERAS_FULFILLED':
      console.log('payload', action.payload);
      return [...action.payload.data];
    case 'ADD_TO_CART_FULFILLED':
      return [...action.payload.data];
    default:
      return state;
  }
}
