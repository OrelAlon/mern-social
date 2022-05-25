import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import "./favorite.css";

function Favorite({ restaurant }) {
  const [restaurantsList, setRestaurantsList] = useState([]);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchRestaurants = async () => {
      const res = await axios.get(`/restaurant/restaurants`);
      setRestaurantsList(res.data);
    };

    fetchRestaurants();
  }, []);

  return (
    <li className='rightbarRestaurants'>
      <div className='rightbarProfileImgContainer'>
        <img
          className='rightbarProfileImg'
          src={restaurant.profilePicture}
          alt=''
        />
      </div>
      <span className='rightbarRestaurant'> {restaurant.restaurantname}</span>
    </li>
  );
}

export default Favorite;
