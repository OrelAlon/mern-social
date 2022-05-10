import { useState, useEffect } from "react";

import axios from "axios";

import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  username = "orel";
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "http://localhost:8000/api/posts/profile/orel"
      );
      console.log(res);
    };
    fetchPosts();
  }, []);

  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <input onChange={(e) => setText(e.target.value)}></input>

        <Share />
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  );
};
export default Feed;
