import React, { useState } from "react";
import { useSelector } from "react-redux";
import { userReduxData } from "../Redux/Features/userSlice";
import {
  checkInputDataPassword,
  checkInputDataPhoneNumber,
} from "./checkInputData";
import { getCurrentUser, setCurrentUser } from "./CurrentUser";

import { GetIndexFromState } from "./GetIndexFromState";
import InputFields from "./InputFields";

import MoviesHome from "./MoviesHome";
import Register from "./Register";

const LogIn = () => {
  const [isValidInput, setIsValidINput] = useState("false");

  const userState = useSelector(userReduxData);

  const [userInfo, setUserInfo] = useState({
    phoneNumber: "",
    password: "",
  });

  const validate = (e) => {
    e.preventDefault();

    const checkPhoneNumber = checkInputDataPhoneNumber(userState, userInfo);
    const checkPassword = checkInputDataPassword(userState, userInfo);
    if (checkPhoneNumber === "true" && checkPassword === "true") {
      setIsValidINput("true");
      const user = GetIndexFromState(userState, userInfo);
      setCurrentUser(user);
      if (!localStorage.getItem(getCurrentUser().phoneNumber))
        localStorage.setItem(userInfo.phoneNumber, JSON.stringify([]));
    } else alert("Enter Correct Details");
  };
  const [userRegistered, SetUserRegistered] = useState("false");
  const register = () => {
    SetUserRegistered("true");
  };
  return (
    <>
      {isValidInput === "false" && userRegistered === "false" ? (
        <div className="container-fluid col-lg-6 col-sm-3 col-md-4">
          
          <div className="card text-center mx-auto mt-5 ">
            <div className="card-body">
              <form onSubmit={validate}>
                <div>
                  <label>Phone Number</label>
                  <br />
                  <InputFields type={'text'} placeholder={'Phone Number'} value={userInfo.phoneNumber}
                   onChange={(e) =>
                    setUserInfo({ ...userInfo, phoneNumber: e.target.value })
                  } />
                 
                </div>
                <div className="form-group mt-2">
                  <label>Password</label>
                  <br />
                  <InputFields type={'password'} placeholder={'Password'} value={userInfo.password}
                   onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  } />
                 
                </div>
                <div className="text-center mt-2">
                  <button type="submit" className="btn btn-primary ">
                    Submit
                  </button>
                  <div className="text-center mt-2">
                    <small>
                      Dont have an account?{" "}
                      <button
                        className="btn btn-light"
                        type="button"
                        onClick={register}
                      >
                        Register Here
                      </button>
                    </small>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : userRegistered === "true" ? (
        <Register />
      ) : (
        <MoviesHome />
      )}
    </>
  );
};

export default LogIn;
