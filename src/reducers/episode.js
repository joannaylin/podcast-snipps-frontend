export default function episode(
  state = {
    currentPage: {},
    isPlaying: false,
  },
  action
) {
  switch (action.type) {
    case "ADD_EPISODE":
      return {...state, currentPage: action.episode};
    default:
      return state;
  }
}
