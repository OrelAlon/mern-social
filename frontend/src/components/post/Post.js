import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

import "./post.css";

const Post = ({ post }) => {
  console.log(Users);
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
              src={`like.png`}
              //   onClick={likeHandler}
              alt=''
            />
            <img
              className='likeIcon'
              src={`heart.png`}
              //   onClick={likeHandler}
              alt=''
            />
            {/* <span className='postLikeCounter'>{like} people like it</span> */}
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
