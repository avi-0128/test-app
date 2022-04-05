import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteCurrentUser, getCurrentUser } from "./CurrentUser";
import MoviesHome from "./MoviesHome";
import NavBar from "./NavBar";

const LogOut = () => {
  let currentUser = getCurrentUser();
  useEffect(() => {
    currentUser = getCurrentUser();
  })
  return (
    <>
      {currentUser ? (
        <>
          <NavBar /><div className="container-fluid">
          <div className="card mx-auto mt-5 text-center col-lg-6 col-sm-4 col-md-6">
            <div className="card-body  ">
              <h4>Do you want to logout?</h4>
              <div className="card-text w-40 text-center">
                <button
                  className="btn btn-light"
                  onClick={() => deleteCurrentUser()}
                >
                  <Link to="/home" className="nav-brand">
                    YES
                  </Link>
                </button>{" "}
                <button
                  className="btn btn-light nav-brand "
                  onClick={() => alert("Click on Yes to logout!")}
                >
                  NO
                </button>
              </div>
            </div>
          </div></div>
        </>
      ) : (
        <MoviesHome />
      )}
    </>
  );
};

export default LogOut;
