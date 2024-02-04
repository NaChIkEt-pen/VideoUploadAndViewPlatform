import React from "react";
import ReactPlayer from "react-player";

import "../../CSS/HomePageCSS/HomePageVideoCard.css";
export default function VideoCard() {
  return (
    <div className="videoCardDiv">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=E4R5HC8lFHQ"
        width="28vw"
        height="32vh"
        className="videoMedia"
      />
      <div className="videoCardText">
        <span className="videoTitle">This is video Title.</span>
        <div className="videoTextFooter">
          <span className="videoUploader">This is name of Uploader.</span>
          <span className="videoUploadTime">Upload time.</span>
        </div>
      </div>
    </div>
  );
}
