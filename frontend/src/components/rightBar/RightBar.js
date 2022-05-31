import { useEffect, useState } from "react";
import Favorite from "../favorite/Favorite";
import { PermMedia } from "@material-ui/icons";

import axios from "axios";

import "./rightbar.css";

const Rightbar = ({ user }) => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    // const getFriends = async () => {
    //   try {
    //     const friendList = await axios.get("/users/friends/" + currentUser._id);
    //     setFriends(friendList.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   // };
    //   // getFriends();
    const fetchRestaurants = async () => {
      const res = await axios.get(`/restaurants/restaurants`);
      setRestaurantsList(res.data);
    };

    fetchRestaurants();
  }, [user]);

  const click = () => {
    console.log(file);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    const update = {
      userId: user._id,
    };
    console.log(file);
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      update.profilePicture = fileName;
      console.log(update.profilePicture);
      console.log(fileName);
      console.log(update);

      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(update);
    try {
      await axios.put("/users/" + user._id, update);
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // const HomeRightbar = () => {
  //   return (
  //     <>
  //       <div className='rightbarFav'></div>
  //       <h4 className='rightbarTitle'>Favorite Restaurants</h4>
  //       <ul className='rightbarFriendList'>
  //         {restaurantsList.map((res) => (
  //           <Favorite key={res._id} restaurant={res} />
  //         ))}
  //       </ul>{" "}
  //     </>
  //   );
  // };

  // const ProfileRightbar = () => {
  return (
    <>
      <div className='rightbarTitle'>User information</div>
      <div className='rightbarInfo'>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>City:</span>
          {/* <span className='rightbarInfoValue'>{user.city || "Haifa"}</span> */}
        </div>
        <div className='rightbarInfoItem'>
          {/* <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>{user.from}</span> */}
        </div>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>Relationship:</span>
          <span className='rightbarInfoValue'>
            {/* {user.relationship === 1
              ? "Single"
              : user.relationship === 1
              ? "Married"
              : "Complicated"} */}
          </span>
        </div>
        <form className='changePicture' onSubmit={submitHandler}>
          <label htmlFor='file' className='shareOption'>
            <PermMedia htmlColor='tomato' className='shareIcon' />
            <span className='shareOptionText'>Change Picture</span>
            <input
              // style={{ display: "none" }}
              type='file'
              id='file'
              accept='.png,.jpeg,.jpg,.jfif'
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>{" "}
          <button className='saveButton' type='submit' onClick={click}>
            Save
          </button>
        </form>
      </div>
    </>
  );
};
//   return (
//     <div className='rightbar'>
//       <div className='rightbarWrapper'>
//         {user ? <ProfileRightbar /> : <HomeRightbar />}
//       </div>
//     </div>
//   );
// };

export default Rightbar;
