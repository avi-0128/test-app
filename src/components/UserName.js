import React from "react";
import { getCurrentUser } from "./CurrentUser";
import NavBar from "./NavBar";
import ProfileNav from "./ProfileNav";

const UserName = () => {
  const user = getCurrentUser();

  return (
    <>
      <NavBar />
      <ProfileNav />
      <div className=" card text-center  mx-auto mt-5 col-lg-2 col-md-4 col-sm-4">
        <h4>
         <span>{user.name}</span>
        </h4>
      </div>
    </>
  );
};

export default UserName;
