const apiURL = "http://localhost:3000/api/v1/";

export function fetchSearchResults(query) {
  return (dispatch) => {
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ query }),
    };
    fetch(`${apiURL}search`, reqObj)
      .then((resp) => resp.json())
      .then((shows) => {
        const podcasts = shows.shows.shows.items;
        dispatch({ type: "ADD_PODCASTS", podcasts });
      });
  };
}

export function fetchPodcastInfo(id) {
  return (dispatch) => {
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ id }),
    };
    fetch(`${apiURL}podcast`, reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        const info = data.show_info
        dispatch({type:"ADD_PODCAST_INFO", info})
      });
  };
}

export function fetchPodcastEpisodes(id) {
  return (dispatch) => {
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ id }),
    };
    fetch(`${apiURL}podcast_episodes`, reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        const episodes = data.show_episodes_info.items
        dispatch({type:"ADD_PODCAST_EPISODES", episodes})
      });
  };
}