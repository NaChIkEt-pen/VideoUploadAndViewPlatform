import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//global vars
import { userAuthAtom, userAuthId } from "../GlobalVars";
import { useAtom } from "jotai/react";

//css
import "../CSS/UserAccount/UserAccountPage.css";

//components
import AccountPageNavbar from "./Components/AccountPageNavbar";

export default function UserAccountPage() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useAtom(userAuthAtom);
  const [userName, setuserName] = useAtom(userAuthId);

  // POST usestates
  const [video, setVideo] = useState(null);
  const [render, setRender] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleChange = async (event) => {
    await setVideo(event.target.files[0]);
    const file = event.target.files[0];
    setFileName(file.name);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setRender(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const uploadData = new FormData();
    await uploadData.append("video", video);
    //console.log(fileName);
    console.log(uploadData);
    //console.log(userName);
    fetch(`http://localhost:3000/upload-video/${userName}/${fileName}`, {
      method: "POST",
      body: uploadData,
    })
      .then((data) => {
        if (data.status == 200) alert("Vide Uploded successfull");
        else alert("Vide not Uploded successfull");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  //GET usestates
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch the MP4 file data
    fetch("/")
      .then((response) => response.arrayBuffer())
      .then((data) => setVideoData(data))
      .catch((error) => console.error("Error fetching video data:", error));
  }, []);
  if (isAuth == true) {
    return (
      <>
        <AccountPageNavbar />
        <div className="userAccountMainDiv">
          <div className="viewsGraphDiv">
            <p className="viewsDivTitle">Views</p>
            <hr className="viewsHr" />
          </div>
          <div className="videoUploadMainDiv">
            <div className="fileUploadDiv">
              <input
                className={"fileUpload"}
                type="file"
                onChange={handleChange}
              />
            </div>
            <div className="videoRendererDiv">
              {/* <video controls>
                <source src={videoUrl} type="video/mp4" />
              </video> */}
              {render && (
                <video controls src={render} className="videoRenderer">
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <br />
            <div className="uploadButtonDiv">
              <input
                className={"uploadButton"}
                type="button"
                value={"Upload"}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
        <div className="userAccountUploadedVideos"></div>
      </>
    );
  } else {
    navigate("/login", { replace: true });
  }
}
