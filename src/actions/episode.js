const apiURL = "http://localhost:3000/api/v1/";

// fetch episode info using spotify's episodeId
export function fetchEpisode(episodeId) {
  return (dispatch) => {
    dispatch({ type: "START_FETCH" });

    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ episodeId }),
    };

    fetch(`${apiURL}episode_search`, reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: "END_FETCH" });
        const episode = data.episode;
        dispatch({ type: "ADD_EPISODE", episode });
      });
  };
}

// fetch all episodes from the backend
export function fetchEpisodes() {
  return (dispatch) => {
    const reqObj = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    fetch(`${apiURL}episodes`, reqObj)
    .then(resp=> resp.json())
    .then(data => {
      dispatch({type: "GET_EPISODES", data})
    })
  };
}
