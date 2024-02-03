import './index.css'
import ReactPlayer from 'react-player'

const VideoPlayer = () => {
  const videoUrl = 'https://youtu.be/YE7VzlLtp-4'
  //   const videoUrl = 'https://fb.watch/6XMS0yxvMX/'
  //   const videoUrl = 'https://soundcloud.com/digitalstreams/sets/top20'
  return (
    <div className="video-container">
      <h1 className="heading">Video Player</h1>
      <div className="responsive-container">
        <ReactPlayer url={videoUrl} />
      </div>
    </div>
  )
}

export default VideoPlayer
