import { useEffect, useState, useContext } from "react";
import { Restaurants } from "../../dummyData";
import { Add, Remove } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";
import Favorite from "../favorite/Favorite";
import axios from "axios";

import "./rightbar.css";

const Rightbar = ({ user }) => {
  // const [friends, setFriends] = useState([]);
  const [restaurantsList, setRestaurantsList] = useState([]);

  // const { user: currentUser, dispatch } = useContext(AuthContext);

  useEffect(() => {
    // const getFriends = async () => {
    //   try {
    //     const friendList = await axios.get("/users/friends/" + currentUser._id);
    //     setFriends(friendList.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getFriends();
    const fetchRestaurants = async () => {
      const res = await axios.get(`/restaurants/restaurants`);
      setRestaurantsList(res.data);
    };

    fetchRestaurants();
  }, [user]);

  const HomeRightbar = () => {
    return (
      <>
        <div className='rightbarFav'></div>
        <h4 className='rightbarTitle'>Favorite Restaurants</h4>
        <ul className='rightbarFriendList'>
          {restaurantsList.map((res) => (
            <Favorite key={res._id} restaurant={res} />
          ))}
        </ul>{" "}
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <div className='rightbarTitle'>User information</div>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>{user.city}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>{user.from}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "Complicated"}
            </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
