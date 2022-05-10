import { useState, useEffect } from "react";
import { useParams } from "react-router";

import axios from "axios";

import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

import { Users } from "../../dummyData";

import "./profile.css";

const Profile = () => {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className='profile'>
        <Leftbar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img className='profileCoverImg' src={user.coverPicture} alt='' />
              <img
                className='profileUserImg'
                src={user.profilePicture}
                alt=''
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>{user.username}</h4>
              <span className='profileInfoDesc'>{user.desc}</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
