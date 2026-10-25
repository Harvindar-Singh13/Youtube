import { useState } from "react";

function MainVideoCard({ title, channel, videoId }) {
  
  return (
    <div>
      <iframe
      key={videoId}
        width="100%"
        height="500"
        src={` https://www.youtube.com/embed/${videoId}`}
        title={title}
        allowFullScreen
        className="rounded-xl"
      ></iframe>

      
      <h1 className="text-2xl text-white  font-bold mt-4">{title}</h1>

      
      <p className="text-white mt-2">{channel}</p>
    </div>
  );
}

export default MainVideoCard;
