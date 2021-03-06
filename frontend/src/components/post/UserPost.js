import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import React from "react";

import { format } from "timeago.js";

import { DeleteForever } from "@material-ui/icons";

import "./post.css";

const UserPost = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const [restaurant, setRestaurant] = useState({});
  const { user: currentUser } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/?userId=${post.userId}`);
      setUser(res.data);
    };
    const fetchRestaurant = async () => {
      const res = await axios.get(
        `/restaurants/?restaurantId=${post.restaurantId}`
      );
      setRestaurant(res.data);
    };
    fetchRestaurant();
    fetchUser();
  }, [post]);

  const likeHandler = () => {
    try {
      axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
    } catch (error) {
      console.log(error);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const deleteHandler = async () => {
    try {
      await axios.delete(`/posts/${post._id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            {/* <Link to={`/profile/${user.username}`}> */}
            <img
              className='postProfileImg'
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "noAvatar.png"
              }
              alt=''
            />
            {/* </Link> */}
            <span className='postUsername'>
              <span className='bold'> {user.username} </span>in{" "}
              <span className='bold'>{restaurant.restaurantname}</span>
            </span>
            <span className='postDate'>{format(post.createdAt)}</span>
          </div>
          <div className='postTopRight' onClick={deleteHandler}>
            <DeleteForever className='deleteIcon' />
          </div>
        </div>
        <div className='postCenter'>
          <img className='postImg' src={PF + post.img} alt='' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              className='likeIcon'
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=''
            />
            <img
              className='likeIcon'
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=''
            />
            <span className='postLikeCounter'>{like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postText'>{post.desc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
