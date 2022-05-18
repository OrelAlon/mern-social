import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import me from "../../assets/users/me.png";
import noAvatar from "../../assets/noAvatar.png";

import "./navbar.css";

function Navbar() {
  const { user } = useContext(AuthContext);
  const [localUser, setLocalUser] = useState([]);

  useEffect(() => {
    const User =
      localStorage.getItem("user") !== "null"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();
    setLocalUser(User);
  }, []);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <Link to='/' style={{ textDecoration: "none" }}>
          <span className='logo'>Social - Food</span>
        </Link>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input placeholder='Search Something....' className='searchInput' />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
          <Link to={`/profile/${localUser.username}`}>
            <div className='topbarIconItem'>
              <Person />
            </div>
          </Link>

          <div className='topbarIconItem'>
            <Chat />
            {/* <span className='topbarIconBadge'>2</span> */}
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            {/* <span className='topbarIconBadge'>1</span> */}
          </div>
        </div>
        <div>
          <Link to={`/profile/${localUser.username}`}>
            <img
              src={
                localUser.profilePicture
                  ? PF + localUser.profilePicture
                  : noAvatar
              }
              alt=''
              className='topbarImg'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
