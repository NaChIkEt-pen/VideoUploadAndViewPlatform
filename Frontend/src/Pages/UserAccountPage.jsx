import React, { useEffect } from "react";
import { userAuthAtom, userAuthId } from "../GlobalVars";
import { useAtom } from "jotai/react";
export default function UserAccountPage() {
  const [isAuth, setIsAuth] = useAtom(userAuthAtom);
  if (isAuth == true) {
    return (
      <>
        <h1>is auth</h1>
      </>
    );
  }
}
