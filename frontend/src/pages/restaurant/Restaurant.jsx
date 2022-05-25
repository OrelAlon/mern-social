import { useState, useEffect } from "react";
import { useParams } from "react-router";

import axios from "axios";

import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState({});
  const restaurantname = useParams().restaurantname;

  useEffect(() => {
    const fetchRestaurant = async () => {
      const res = await axios.get(
        `/restaurants/?restaurantname=${restaurantname}`
      );
      setRestaurant(res.data);
    };
    fetchRestaurant();
  }, []);

  return (
    <>
      <Navbar />
      <div className='profile'>
        <Leftbar />
        <div className='profileRight'>
          <h1>restaurantnamerestaurantnamerestaurantname</h1>
          {/* <div className='profileRightTop'>
              <div className='profileCover'>
                <img
                  className='profileCoverImg'
                  src={user.coverPicture ? user.coverPicture : PF + "noCover.png"}
                  alt=''
                />
                <img
                  className='profileUserImg'
                  src={
                    user.profilePicture
                      ? user.profilePicture
                      : PF + "noAvatar.png"
                  }
                  alt=''
                />
              </div>
              <div className='profileInfo'>
                <h1 className='profileInfoName'>{user.username}</h1>
                <span className='profileInfoDesc'>{user.desc}</span>
              </div>
            </div>
            <div className='profileRightBottom'>
              <Feed username={username} />
              <Rightbar user={user} />
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Restaurant;
