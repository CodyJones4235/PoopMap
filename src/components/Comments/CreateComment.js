  
import React, { useContext, useEffect, useState } from "react";
import { CommentsContext } from "../Comments/CommentProvider";
import { useHistory } from "react-router-dom";

export const Createcomment = () => {
  const {getComments, addComments } = useContext(CommentsContext)
  const userId = localStorage.getItem('poop_usr');
  const history = useHistory();
  const [Comments, setComments] = useState({
    userId: 0,
    postId: 0,
    msg: ""
  });
  useEffect(() => {
    getComments()
  }, []);

  const handleControlledInputChange = (event) => {

    const newComment = { ...Comments };

    newComment[event.target.id] = event.target.value;

    setComments(newComment);
  };

  if(userId > 0){
    Comments.userId = parseInt(localStorage.getItem('poop_usr'));
  }

  const handleClickSaveComment = (event ) => {
    event.preventDefault();
    const newComment = { ...Comments };
    newComment.postId = parseInt(newComment.postId)

    if (newComment.msg === "" ) {
      window.alert("Please select a location and a customer");
    } else {

        addComments(newComment).then(() => history.push("/"));
    }
  };

  //usr input form
  return (
    <form className="CommentForm">
      <h2 className="CommentForm__msg">New Comment</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="msg">msg:</label>
          <input
            type="text"
            id="msg"
            required
            autoFocus
            className="form-control"
            placeholder="msg"
            value={Comments.msg}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="postId">postId:</label>
          <input
            type= "number"
            min="0"
            max="9999999999"
            id="postId"
            required
            autoFocus
            className="form-control"
            placeholder="1,2,3,4,5,etc"
            value={Comments.postId}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveComment}>
        Submit
      </button>
    </form>
  );
};  