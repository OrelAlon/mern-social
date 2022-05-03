import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/sidebar/Leftbar";
import RightBar from "../../components/rightBar/RightBar";

import { Person } from "@material-ui/icons";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Leftbar /> <RightBar />
    </div>
  );
};

export default Home;
