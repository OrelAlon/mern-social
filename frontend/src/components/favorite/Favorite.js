import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";

import axios from "axios";

import "./favorite.css";

function Favorite({ restaurant }) {
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const res = await axios.get(`/restaurants/restaurants`);
      setRestaurantsList(res.data);
    };

    fetchRestaurants();
  }, []);

  return (
    <li className='rightbarRestaurants'>
      <div className='rightbarProfileImgContainer'>
        <Link to={`/restaurant/${restaurant.restaurantname}`}>
          <img
            className='rightbarProfileImg'
            src={restaurant.profilePicture}
            alt=''
          />
        </Link>
      </div>
      <span className='rightbarRestaurant'> {restaurant.restaurantname}</span>
    </li>
  );
}

export default Favorite;
