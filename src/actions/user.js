const apiURL = "http://localhost:3000/api/v1/";

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

export function logoutUser() {
  return { type: "LOGOUT_USER" };
}
