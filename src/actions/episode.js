const apiURL = "http://localhost:3000/api/v1/";

export function fetchEpisode(episodeId) {
  return (dispatch) => {
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
        const episode = data.episode;
        dispatch({ type: "ADD_EPISODE", episode });
      });
  };
}
