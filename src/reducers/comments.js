export default function comments(state = [], action) {
  switch (action.type) {
    case "GET_COMMENTS":
      return [...action.comments];
    case "ADD_COMMENT":
      return [...action.comments];
    case "UPDATE_COMMENT":
      const updatedComment = action.comment;
      return state.map((comment) => comment.id === updatedComment.id ? updatedComment : comment);
    case "REMOVE_COMMENT":
      return state.filter((comment) => comment.id !== action.id);
    default:
      return state;
  }
}
