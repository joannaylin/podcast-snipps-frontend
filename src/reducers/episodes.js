export default function episodes(
  state = {
    currentPage: {},
    usersEpisodes: []
  },
  action
) {
  switch (action.type) {
    case "ADD_EPISODE":
      return {...state, currentPage: action.episode};
    case "GET_EPISODES":
      return {...state, usersEpisodes: action.data}
    default:
      return state;
  }
}
