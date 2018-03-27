const flights = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FLIGHTS':
      return state;
    case 'UPDATE_FLIGHTS':
      return action.flights;
    default:
      return state;
  }
};
 
export default flights;
