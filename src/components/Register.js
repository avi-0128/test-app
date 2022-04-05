import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp, userReduxData } from "../Redux/Features/userSlice";
import { checkInputDataPhoneNumber } from "./checkInputData";
import InputFields from "./InputFields";
import LogIn from "./LogIn";
import { setBackground } from "./Styles";



const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [isValidData, setIsValidData] = useState("false");

  const userState = useSelector(userReduxData);

  const dispatch = useDispatch();

  const validate = (e) => {
    e.preventDefault();

    if (
      userInfo.name.trim() &&
      userInfo.phoneNumber.length === 10 &&
      userInfo.password.trim()
    ) {
      const check = checkInputDataPhoneNumber(userState, userInfo);

      if (check === "true") {
        alert("User Registered!!");
        setIsValidData("true");
      } else {
        dispatch(signUp([...userState, userInfo]));
        setIsValidData("true");
        localStorage.setItem(
          "userData",
          JSON.stringify([...userState, userInfo])
        );
      }
    } else alert("Enter valid details");
  };
  const registered = () => setIsValidData("true");
  useEffect(() => {
    console.log(isValidData);
  }, [isValidData]);

  setBackground('black')
  return (
    
    <>
      {isValidData === "false" ? (
       
        <div className="container-fluid  col-lg-6 col-md-4 col-sm-4  " >
          <div className="card text-center bg-dark  text-white  shadow border h-100 mt-5 mx-auto ">
            <div className="card-body d-flex flex-column align-items-center ">
              <form onSubmit={validate} className=''>
                <div className="form-group">
                  <label>Email address</label>
                  <br />
                  <InputFields type={'email'} placeholder={'Enter email'} value={userInfo.email}
                   onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  } />
                </div>
                <div className="form-group mt-2">
                  <label>Name</label>
                  <br />
                  <InputFields type={'text'} placeholder={'Enter Name'} value={userInfo.name}
                   onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  } />
                </div>
                <div className="form-group mt-2">
                  <label>Phone Number</label>
                  <br />
                  <InputFields type={'text'} placeholder={'Phone Number'} value={userInfo.phoneNumber}
                   onChange={(e) =>
                    setUserInfo({ ...userInfo, phoneNumber: e.target.value })
                  } />
                 
                  <br />
                  <small>Enter your 10 digit mobile number</small>
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
                </div>
                <small>
                  Already have an account?{"    "}
                  <button
                    type="button"
                    onClick={registered}
                    className="btn btn-light  col-lg-6 col-xs-4"
                  >
                    Click here
                  </button>
                </small>
              </form>
            </div>
          </div>
        </div> 
      
      ) : (
        <LogIn />
      )}
    </>
  );
};

export default Register;
