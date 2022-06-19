import { useRef, useState } from "react";

import Navbar from "../../components/navbar/Navbar";

import { PermMedia } from "@material-ui/icons";

import "./addRestaurant.css";

const AddRestaurant = () => {
  const [file, setFile] = useState(null);

  return (
    <>
      <Navbar />
      <div className='addRestaurant'>
        <h1>AddRestaurant</h1>

        <form action='submit' className='formBox'>
          <label htmlFor='file' className='loginImg'>
            Add Restaurant Name
          </label>
          <input
            placeholder='Restaurant Name'
            type='string'
            required
            className='restaurantInput'
            // ref={emailRef}
          />
          <div className='imgLog'>
            <label htmlFor='file' className='loginImg'>
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Add Restaurant Logo</span>
              <input
                required
                style={{ display: "none" }}
                type='file'
                name='file'
                id='file'
                accept='.png,.jpeg,.jpg,.jfif'
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          {/* <button className='loginButton' type='submit' disabled={isFetching}>
            {isFetching ? <CircularProgress size='25px' /> : "Login"}
          </button> */}
          {/* <span className='loginForgot'>Forgot Password?</span> */}
        </form>
      </div>
    </>
  );
};

export default AddRestaurant;
