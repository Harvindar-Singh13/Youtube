import { useEffect, useState } from "react";

function YoutubeApi({ Navbar, VideoCard, MainVideoCard }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");

   const API_KEY = import.meta.env.VITE_API_KEY;

  async function fetchVideos(search = "react") {
    const response = await fetch(
      `  https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&maxResults=12&key=${API_KEY}`,
    );

    const data = await response.json();

    setVideos(data.items || []);
    if (data.items?.length > 0) {
      setSelectedVideo(data.items[0].id.videoId);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      <Navbar onSearch={fetchVideos} />

      {selectedVideo && (
        <div className="max-w-full mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#0B0f1A]  ">
          <div className="lg:col-span-2">
            <MainVideoCard
            videoId={selectedVideo}
              title={videos[0].snippet.title}
              channel={videos[0].snippet.channelTitle}
              image={videos[0].snippet.thumbnails.high.url}
              
            />
          </div>

          <div className="flex flex-col gap-4">
          {videos 
          .filter((video,index)=> index !==0)
          .slice(0,5)
          .map((video)=>(
              <VideoCard
                  key={video.id.videoId}
                  title={video.snippet.title}
                  channel={video.snippet.channelTitle}
                  image={video.snippet.thumbnails.high.url}
                  videoId={video.id.videoId}
                  setSelectedVideo={setSelectedVideo}
                />
          ))
          }
          </div>
        </div>
      )}
    </div>
  );
}

export default YoutubeApi;
