import { combineReducers } from "redux"
import users from "./users"
import podcasts from "./podcasts"
import episode from "./episode"
import comments from "./comments"

export default combineReducers({
  users,
  podcasts,
  episode,
  comments
})