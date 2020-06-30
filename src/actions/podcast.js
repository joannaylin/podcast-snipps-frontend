const apiURL = "http://localhost:3000/api/v1/";

// fetch podcasts that satisfy search query
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
    fetch(`${apiURL}podcast_search`, reqObj)
      .then((resp) => resp.json())
      .then((shows) => {
        const podcasts = shows.shows.shows.items;
        dispatch({ type: "ADD_PODCASTS", podcasts });
      });
  };
}

// fetch podcast info using spotify show id
export function fetchPodcastInfo(showId) {
  return (dispatch) => {
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ showId }),
    };
    fetch(`${apiURL}podcast`, reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        const info = data.show_info
        dispatch({type:"ADD_PODCAST_INFO", info})
      });
  };
}

// fetch podcast episodes using spotify show id
export function fetchPodcastEpisodes(showId) {
  return (dispatch) => {
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ showId }),
    };
    fetch(`${apiURL}podcast_episodes`, reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        const episodes = data.show_episodes_info.items
        dispatch({type:"ADD_PODCAST_EPISODES", episodes})
      });
  };
}