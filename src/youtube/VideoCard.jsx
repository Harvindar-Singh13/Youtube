function VideoCard({ 
  title,
  channel,
  image,
  videoId,
  setSelectedVideo,
  
}) {
  return (
    <div
      onClick={() => setSelectedVideo(videoId)}
      className="flex gap-3 cursor-pointer hover:bg-gray-900 p-2 rounded-lg"
    >
      <img
        src={image}
        alt=""

        className="w-40 rounded-lg"
      />

      <div>
        <h2 className="font-semibold text-sm line-clamp-2 text-white">
          {title}
        </h2>

        <p className="text-gray-400 text-sm mt-2">
          {channel}
        </p>
        
      </div>
    </div>
  );
}

export default VideoCard;