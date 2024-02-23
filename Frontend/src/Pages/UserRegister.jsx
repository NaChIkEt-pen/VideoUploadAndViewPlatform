import React, { useState } from "react";
import "../CSS/UserRegister/UserRegister.css";

//import global
import { userAuthAtom } from "../GlobalVars";
import { useAtom } from "jotai/react";

export default function UserRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isAuth, setIsAuth] = useAtom(userAuthAtom);
  const onRegisterButtonClick = () => {
    if (email != null && name != null && password != null) {
      fetch(`http://localhost:3000/insert/userlogindata`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
    }
  };
  if (!isAuth) {
  }
  return (
    <>
      <div className={"mainContainer"}>
        <h1>Register Here!</h1>
        <div className={"titleContainer"}>
          <div>Login</div>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={name}
            placeholder="Enter your name here"
            onChange={(ev) => setName(ev.target.value)}
            className={"inputBox"}
            required
          />
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className={"inputBox"}
            required
          />
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
            required
          />
        </div>
        <br />
        <div className={"inputContainer buttonDiv"}>
          <input
            className={"inputButton"}
            type="button"
            onClick={onRegisterButtonClick}
            value={"Register"}
          />
        </div>
      </div>
    </>
  );
}
