import Navbar from "../../components/navbar/Navbar";
import { Person } from "@material-ui/icons";
import me from "../../assets/users/me.png";
const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>orel</h1>
      <div>
        {" "}
        <img src={me} className='topbarImg' />
      </div>
    </div>
  );
};

export default Home;
