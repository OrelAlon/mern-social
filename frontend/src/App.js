import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./App.css";

function App() {
  return (
    <>
      <div className='App'>
        <h1>testing</h1>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile/:username' element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
