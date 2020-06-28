const apiURL = "http://localhost:3000/api/v1/";

// what do i do with the data when it comes back?
export function addComment(episode, comment) {
  return (dispatch) => {
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({episode, comment }),
    };

    fetch(`${apiURL}episodes`, reqObj)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };
}