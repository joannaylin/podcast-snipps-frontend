const apiURL = "http://localhost:3000/api/v1/";

// takes authorization code from spotify and sends to backend
// backend will take care of swap to access and refresh tokens
export function fetchAuth(code) {
  return (dispatch) => {
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token token=" + localStorage.getItem("token"),
      },
      body: JSON.stringify({ code }),
    };
    return fetch(`${apiURL}users?=${code}`, reqObj)
      .then((resp) => resp.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        const user = json.user;
        return dispatch({ type: "UPDATE_AUTHORIZATION", user });
      });
  };
}

// gets the current user's username, spotify_url and profile image to keep in store
export function getCurrentUser() {
  return (dispatch) => {
    const reqObj = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token token=" + localStorage.getItem("token"),
      },
    };
    return fetch(`${apiURL}auth`, reqObj)
      .then((resp) => resp.json())
      .then((json) => {
        if (!json.error) {
          const user = json;
          return dispatch({ type: "UPDATE_AUTHORIZATION", user });
        }
      });
  };
}

// logs out user
export function logoutUser() {
  return { type: "LOGOUT_USER" };
}
