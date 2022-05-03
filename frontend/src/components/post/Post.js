import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
import { Users } from "../../dummyData";
import heartPic from "../../assets/heart.png";
import likePic from "../../assets/like.png";
import "./post.css";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            {/* <Link to={`/profile/${user.username}`}> */}
            <img
              className='postProfileImg'
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=''
            />
            {/* </Link> */}
            <span className='postUsername'>
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className='postDate'>{post.data}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post.desc}</span>
          <img className='postImg' src={post.photo} alt='' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              className='likeIcon'
              src={likePic}
              onClick={likeHandler}
              alt=''
            />
            <img
              className='likeIcon'
              src={heartPic}
              onClick={likeHandler}
              alt=''
            />
            <span className='postLikeCounter'>{like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
