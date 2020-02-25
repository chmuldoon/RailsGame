import { combineReducers } from "redux";
import modal from "./modal_reducer.js";

import post from './posts_reducer'

export default combineReducers({
  modal,
  post
})