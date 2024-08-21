import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="mx-0 pt-[15%] px-[10%] absolute text-white bg-gradient-to-r from-black aspect-video">
      <h1 className=" text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex flex-row">
        <buttton className="  text-black bg-white border-black py-4 px-8 flex flex-row  rounded-lg hover:bg-opacity-50">
          <svg
            className="h-5 w-5 text-black-500 mx-2 my-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
          </svg>
          Play
        </buttton>
        <buttton className="bg-slate-500  text-white py-4 px-8 mx-2 flex flex-row rounded-lg">
          {" "}
          <svg
            className="h-5 w-5 mx-2 my-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          More Info
        </buttton>
      </div>
    </div>
  );
};

export default VideoTitle;
