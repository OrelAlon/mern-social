import React from "react";

import "./login.css";

const Login = () => {
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
              placeholder='Email'
              type='email'
              required
              className='loginInput'
              // ref={email}
            />
            <input
              placeholder='Password'
              type='password'
              required
              minLength='6'
              className='loginInput'
              // ref={password}
            />
            <button
              className='loginButton'
              type='submit'
              // disabled={isFetching}
            ></button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegisterButton'></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
