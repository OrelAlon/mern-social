import { useContext, useRef, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import React from "react";

import noAvatar from "../../assets/noAvatar.png";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

import "./share.css";

const Share = () => {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [restaurantName, setRestaurantName] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const desc = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      restaurantId: restaurantName,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      const res = await axios.get(`/restaurants/restaurants`);
      setRestaurants(res.data);
    };
    fetchRestaurants();
  }, [file]);

  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img
            className='shareProfileImg'
            src={user.profilePicture ? PF + user.profilePicture : noAvatar}
            alt=''
          />

          <input
            className='shareInput'
            placeholder={"What do you think " + user.username + "?"}
            ref={desc}
          />
        </div>
        <hr className='shareHr' />

        <form className='shareBottom' onSubmit={submitHandler}>
          <div className='shareOptions'>
            <label htmlFor='file' className='shareOption'>
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Photo</span>
              <input
                style={{ display: "none" }}
                type='file'
                id='file'
                accept='.png,.jpeg,.jpg,.jfif'
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className='shareOption'>
              <Label htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag- </span>
              <label htmlFor='restaurant'> a place:</label>
              <select
                className='select'
                name='restaurant'
                id='restaurant'
                defaultValue={"DEFAULT"}
                required
                onChange={(e) => setRestaurantName(e.target.value)}
              >
                <option value='DEFAULT' disabled>
                  {" "}
                  -- Restaurant --{" "}
                </option>
                {restaurants.map((res) => {
                  return (
                    <option key={res._id} value={res._id}>
                      {res.restaurantname}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* <div className='shareOption'>
              <Room htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>
            <div className='shareOption'>
              <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div> */}
          </div>
          <button className='shareButton' type='submit'>
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
