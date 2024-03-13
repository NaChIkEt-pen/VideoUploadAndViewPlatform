import React, { useEffect } from "react";
import { userAuthAtom, userAuthId } from "../GlobalVars";
import { useAtom } from "jotai/react";

import "../CSS/UserAccount/UserAccountPage.css"
export default function UserAccountPage() {
  const [isAuth, setIsAuth] = useAtom(userAuthAtom);
  if (isAuth == true) {
    return (
      <>
        <div className="userAccountMainDiv">
          
        </div>
      </>
    );
  }
}
