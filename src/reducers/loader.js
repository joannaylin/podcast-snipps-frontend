
export default function loader(state = false, action) {
  switch (action.type) {
    case "START_FETCH":
      return true;
    case "END_FETCH": 
      return false;
    default:
      return state;
  }
}
