import { Routes, Route } from "react-router-dom";
import React from "react";

import HomePage from "../Pages/HomePage";
import UserAccountPage from "../Pages/UserAccountPage";
import UserLogin from "../Pages/UserLogin";
import PageNotFound from "../Pages/PageNotFound";
import UserRegister from "../Pages/UserRegister";
function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/account" element={<UserAccountPage />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default MyRouter;
