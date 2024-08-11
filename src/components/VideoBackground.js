import React from "react";

const VideoBackground = () => {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Idh8n5XuYIA?si=s5ppK6NepP3Fb8Fh&amp;controls=0"
        //title="YouTube video player"

        allow="accelerometer; autoplay;   gyroscope; picture-in-picture; "
        referRerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
