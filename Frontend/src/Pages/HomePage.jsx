import React from "react";
import Navbar from "./Components/Navbar";
import VideoCard from "./Components/VideoCard";

import "../CSS/HomePageCSS/HomePage.css";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="videoRendererDiv">
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </>
  );
}
