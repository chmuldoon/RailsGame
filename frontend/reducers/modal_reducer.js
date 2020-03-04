import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_SHOW_MODAL,
} from "../actions/modal_actions";
import merge from "lodash/merge";

const initialState = {

}
export default function modalReducer(state = [], action) {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case OPEN_MODAL:
      return { modal: action.modal };
    case CLOSE_MODAL:
      return null;
    case OPEN_SHOW_MODAL:
      // debugger
      return { modal: action.modal, post: action.post };

    default:
      return state;
  }
}
