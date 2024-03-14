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
  const [video, setVideo] = useState(null);

  const handleChange = async (event) => {
    await setVideo(event.target.files[0]);
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
