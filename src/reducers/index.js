import { combineReducers } from "redux"
import users from "./users"
import podcasts from "./podcasts"

export default combineReducers({
  users,
  podcasts
})