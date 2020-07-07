import { combineReducers } from "redux"
import users from "./users"
import podcasts from "./podcasts"
import episodes from "./episodes"
import comments from "./comments"

export default combineReducers({
  users,
  podcasts,
  episodes,
  comments
})