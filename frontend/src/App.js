import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

import "./App.css";

function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    // 1:25
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={user ? <Home /> : <Register />} />
            <Route
              path='/login'
              element={user ? <Navigate to='/' /> : <Login />}
            />
            <Route
              path='/register'
              element={user ? <Navigate to='/' /> : <Register />}
            />
            <Route path='/profile/:username' element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
