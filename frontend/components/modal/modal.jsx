import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import PostIndexItem  from "../splash/PostIndexItem";
import PostShow from "../splash/PostShow";
// import PostShowContainer from "../post/post_show_container";
// import ProfilePicContainer from "../profile/profile_pic_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal) {
    case "postShow":
      component = <PostShow post={modal.post} />;
      break;
    // case "upload":
    //   component = <NewPostContainer />;
    //   break;
    // case "editProfile":
    //   component = <UserPatchContainer />;
    //   break;
    // case "logout":
    //   component = <LogoutContainer />;
    //   break;
    // case "list":
    //   component = <UserList list={modal.list} kind={modal.kind} />;
    //   break;
    default:
      return null;
  }
  debugger
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    post: state.ui.post,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
