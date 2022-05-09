import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

import { Users } from "../../dummyData";

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
                src={Users[0].coverPicture}
                alt=''
              />
              <img
                className='profileUserImg'
                src={
                  Users.profilePicture
                    ? Users.profilePicture
                    : Users[0].profilePicture
                }
                alt=''
              />
            </div>
            <div className='profileInfo'>
              {/* <h4 className='profileInfoName'>{user.username}</h4>
              <span className='profileInfoDesc'>{user.desc}</span> */}
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
