import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
// import PostShowContainer from "../post/post_show_container";
import PostShowContainer from "../posts/post_show_container";
import NewPostContainer from "../posts/new_post_container";
import UserPatchContainer from "../profile/user_patch_container";
import LogoutContainer from "../profile/logout_container";
import UserList from "../profile/user_list";
// import ProfilePicContainer from "../profile/profile_pic_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal) {
    case "postShow":
      component = <PostShowContainer post={modal.post} />;
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
    // list: state.ui.list,
    // king: state.ui.kind
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
