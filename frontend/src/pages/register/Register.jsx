import React from "react";

import "./register.css";

const Register = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Social - Food</h3>
          <span className='loginDesc'>
            Share and Post photos of food from around the world
          </span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={handleClick}>
            <input
              placeholder='Username'
              required
              //   ref={username}
              className='loginInput'
            />
            <input
              placeholder='Email'
              required
              //   ref={email}
              className='loginInput'
              type='email'
            />
            <input
              placeholder='Password'
              required
              //   ref={password}
              className='loginInput'
              type='password'
              minLength='6'
            />
            <input
              placeholder='Password Again'
              required
              //   ref={passwordAgain}
              className='loginInput'
              type='password'
            />
            <button className='loginButton' type='submit'>
              Sign Up
            </button>
            <button className='loginRegisterButton'>Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
