import React from "react";
import { userAuthAtom } from "../GlobalVars";
import { useSetAtom } from "jotai/react";

//css
import "../CSS/HomePageCSS/HomePage.css";

//components
import HomePageNavbar from "./Components/Navbar";
import VideoCard from "./Components/VideoCard";

export default function HomePage() {
  return (
    <>
      <HomePageNavbar />
      <div className="videoRendererDiv">
        {/* <VideoCard />
        <VideoCard />
        <VideoCard /> */}
      </div>
    </>
  );
}
