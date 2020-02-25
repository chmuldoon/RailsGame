import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_SHOW_MODAL,
} from "../actions/modal_actions";
const initialState = {

}
export default function modalReducer(state = [], action) {

  switch (action.type) {
    case OPEN_MODAL:
      return { modal: action.modal };
    case CLOSE_MODAL:
      return null;
    case OPEN_SHOW_MODAL:
      return { ...state, ui: { modal: action.modal, post: action.post} };

    default:
      return state;
  }
}
