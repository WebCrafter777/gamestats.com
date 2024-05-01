import React from "react";

export const YouTubeVideo = ({ videoId ,className}: { videoId: string,className?:string }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};
