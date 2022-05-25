import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import PublicFeed from "../../components/feed/PublicFeed";

import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='homeContainer'>
        <Leftbar />
        <PublicFeed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
