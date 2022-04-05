import React from "react";
import { Link } from "react-router-dom";

import SearchBox from "./SearchBox";

const NavBar = ({ setSearch, setIsLoggedIn }) => {
  

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark  ">
        <Link to="/home" className="navbar-brand mx-auto ">
          My-App
        </Link>
        <div className="container-fluid col-sm-4 col-lg-6 ">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item active">
              <Link to="/home/fav" className="nav-link">
                Favourites
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/home/profile" className="nav-link">
                Profile
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/home/logout" className="btn btn-dark nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center mx-auto col-sm-3 col-lg-2">
          <SearchBox setSearch={setSearch} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
