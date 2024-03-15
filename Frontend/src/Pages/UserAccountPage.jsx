import React, { useEffect, useState } from "react";

//global vars
import { userAuthAtom, userAuthId } from "../GlobalVars";
import { useAtom } from "jotai/react";

//css
import "../CSS/UserAccount/UserAccountPage.css";

//components
import AccountPageNavbar from "./Components/AccountPageNavbar";

export default function UserAccountPage() {
  const [isAuth, setIsAuth] = useAtom(userAuthAtom);
  const [userName, setuserName] = useAtom(userAuthId);
  const [videoUrl, setVideoUrl] = useState("");
  const [video, setVideo] = useState(null);

  const handleChange = async (event) => {
    await setVideo(event.target.files[0]);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setVideo(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const uploadData = new FormData();
    uploadData.append("video", video);
    // console.log(formData);
    // console.log(userName);
    fetch(`http://localhost:3000/upload-video/${userName}`, {
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
            <div>
              {/* <video controls>
                <source src={videoUrl} type="video/mp4" />
              </video> */}
              {video && (
                <video controls src={video} className="videoRenderer">
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
      </>
    );
  }
}
