import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, postActions } from "./store/postSlice";

const Post = () => {
  const { title } = useSelector((state) => state.post.text);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(postActions.newText())}>Random</button>
      {title}
    </div>
  );
};

export default Post;
