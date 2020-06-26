export default function users(
  state = {
    isLoggedIn: false,
    user: { username: null, spotify_url: null, profile_img_url: null },
    error: false,
  },
  action
) {
  switch (action.type) {
    case "UPDATE_AUTHORIZATION":
      return { ...state, user: action.user, isLoggedIn: true };
    case "LOGOUT_USER":
      localStorage.removeItem("token")
      return {
        ...state,
        user: { username: null, spotify_url: null, profile_img_url: null },
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
