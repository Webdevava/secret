import ReactPlayer from "react-player";

const VideoPage = () => {
  return (
    <div className="videoContainer">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        playing
        controls
        width="80vw"
        height="80vh"
      />
    </div>
  );
};

export default VideoPage;
