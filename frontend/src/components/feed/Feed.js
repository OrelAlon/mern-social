import { useState, useEffect } from "react";

import axios from "axios";

import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(`posts/timeline/627a42763c59736ae5254d4d`);
      setPosts(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};
export default Feed;
