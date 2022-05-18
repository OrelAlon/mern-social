import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

import "./login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { isFecthing, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
      dispatch
    );
    navigate("/");
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
              {isFecthing ? <CircularProgress size='25px' /> : "Login"}
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
