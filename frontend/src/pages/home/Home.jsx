import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/sidebar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='homeContainer'>
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
