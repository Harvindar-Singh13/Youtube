import Navbar from "./youtube/Navbar";
import VideoCard from "./youtube/VideoCard";
import MainVideoCard from "./youtube/MainVideo";

import YoutubeApi from "./youtube/YoutubeApi";

function App() {
  return (
    <YoutubeApi
      Navbar={Navbar}
      VideoCard={VideoCard}
      MainVideoCard={MainVideoCard}
    />
  );
}

export default App; 