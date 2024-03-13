import React, { useEffect } from "react";

//global vars
import { userAuthAtom, userAuthId } from "../GlobalVars";
import { useAtom } from "jotai/react";

//css
import "../CSS/UserAccount/UserAccountPage.css";

//components
import AccountPageNavbar from "./Components/AccountPageNavbar";

export default function UserAccountPage() {
  const [isAuth, setIsAuth] = useAtom(userAuthAtom);
  if (isAuth == true) {
    return (
      <>
        <AccountPageNavbar />
        <div className="userAccountMainDiv"></div>
      </>
    );
  }
}
