import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

import "./App.css";

function App() {
  const { user } = useContext(AuthContext);
  return (
    // 1:25
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile/:username' element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
