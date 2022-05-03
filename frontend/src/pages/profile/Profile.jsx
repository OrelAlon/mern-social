import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/lleftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

import "./profile.css";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Navbar />
      <div className='profile'>
        <Leftbar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                className='profileCoverImg'
                // src={
                //   user.coverPicture
                //     ? PF + user.coverPicture
                //     : PF + "person/noCover.png"
                // }
                alt=''
              />
              <img
                className='profileUserImg'
                // src={
                //   user.profilePicture
                //     ? PF + user.profilePicture
                //     : PF + "person/noAvatar.png"
                // }
                alt=''
              />
            </div>
            <div className='profileInfo'>
              {/* <h4 className='profileInfoName'>{user.username}</h4>
              <span className='profileInfoDesc'>{user.desc}</span> */}
            </div>
          </div>
          <div className='profileRightBottom'>
            {/* <Feed username={username} />
            <Rightbar user={user} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
