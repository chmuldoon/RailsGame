import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import scoresReducer from "./scores_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  scores: scoresReducer
});

export default entitiesReducer;
