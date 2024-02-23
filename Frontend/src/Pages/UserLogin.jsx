import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../CSS/UserLogin/UserLogin.css";

//import global
import { userAuthAtom } from "../GlobalVars";
import { useAtom } from "jotai/react";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userlogindata, setUserLoginData] = useState([]);
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useAtom(userAuthAtom);
  const fetchLoginData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/userlogindata`);
      const result = await response.json();
      setUserLoginData(result);
    } catch (error) {
      console.error(error);
    }
  };
  const isAuthFunction = async () => {
    userlogindata.forEach((element) => {
      if (element.userName == email && element.password == password) {
        // console.log(isAuth);
        setIsAuth(true);
        window.open("/account", "_blank");
        //console.log(isAuth);
      } else if (element.userName == email && element.password != password) {
        setIsAuth(false);
        alert("Password is not correct");
      } else {
        setIsAuth(false);
        alert("User do not exits");
      }
    });
  };
  useEffect(() => {
    fetchLoginData();
  }, []);
  const onLoginButtonClick = async () => {
    // console.log(email);
    // console.log(password);
    await isAuthFunction();
  };
  const onRegisterClick = () => {
    window.open("/register", "_self");
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className={"inputContainer buttonDiv"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onLoginButtonClick}
          value={"Log in"}
        />
        <input
          className={"inputButton registerBtn"}
          type="button"
          onClick={onRegisterClick}
          value={"Register Here"}
        />
      </div>
    </div>
  );
}
