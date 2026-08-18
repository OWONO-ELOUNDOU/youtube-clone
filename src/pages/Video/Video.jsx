import './Video.css'
import PlayVideo from "../../components/PlayVideo/PlayVideo.jsx";
import Recommended from "../../components/Recommended/Recommended.jsx";

const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo />
        <Recommended />
    </div>
  )
}

export default Video
