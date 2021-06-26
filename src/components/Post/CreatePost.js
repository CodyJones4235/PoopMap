  
import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "./PostProvider";
import { useHistory } from "react-router-dom";
import "../Post/Post.css"
export const Createpost = () => {
  const { getPosts, addPost } = useContext(PostContext)
  const userId = localStorage.getItem('poop_usr');
  const history = useHistory();
  const [Posts, setPosts] = useState({
    userId: 0,
    latitude: "",
    longitude: "",
    title: "",
    description: "",
    timestamp: 0
  });
  useEffect(() => {
    getPosts()
  }, []);
  let flag1 = 0
  const handleControlledInputChange = (event) => {

    const newPost = { ...Posts };

    newPost[event.target.id] = event.target.value;

    setPosts(newPost);
  };

  if(userId > 0){
    Posts.userId = parseInt(localStorage.getItem('poop_usr'));
  }

  const handleClickSaveAnimal = (event ) => {
    event.preventDefault();


    if (Posts.latitude === "" ) {
      window.alert("Please select a location and a customer");
    } else {
      addPost(Posts).then(() => history.push("/"));
    }
  };

return (
    <form className="postForm">
      <h2 className="postForm__title">New Post</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            required
            autoFocus
            className="form-control"
            placeholder="title"
            value={Posts.title}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            required
            autoFocus
            className="form-control"
            placeholder="description"
            value={Posts.description}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="latitude">Latitude:</label>
          <input
            type="text"
            id="latitude"
            required
            autoFocus
            className="form-control"
            placeholder="latitude"
            value={Posts.latitude}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="longitude">Longitude:</label>
          <input
            type="text"
            id="longitude"
            required
            autoFocus
            className="form-control"
            placeholder="longitude"
            value={Posts.longitude}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveAnimal}>
        Submit
      </button>
    </form>
  );
};