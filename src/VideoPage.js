import ReactPlayer from "react-player";

const VideoPage = () => {
  return (
    <div className="videoContainer">
      <div className="textContainer">
        <p>&gt; Playing Encrypted File....</p>
      </div>
      <div className="playerContainer">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          playing
          controls
          width="80vw"
          height="80vh"
          fullscreen  
        />
      </div>
    </div>
  );
};

export default VideoPage;
