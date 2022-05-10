import { useRef } from "react";

import "./login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
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
          <form className='loginBox' onSubmit={handleLogin}>
            <input
              placeholder='Email'
              type='email'
              required
              className='loginInput'
              ref={emailRef}
            />
            <input
              placeholder='Password'
              type='password'
              required
              minLength='6'
              className='loginInput'
              ref={passwordRef}
            />
            <button
              className='loginButton'
              type='submit'
              // disabled={isFetching}
            >
              Login
            </button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegisterButton'>Forgot</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
