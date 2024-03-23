import React, { useState } from "react";
import { IoIosLock, IoMdEyeOff } from "react-icons/io";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import { FaEye } from "react-icons/fa";
import {handleChangePsdAPI} from "../../../Service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashUser4ChangePsd = () => {
  const [showPsd, setShowPsd] = useState(false);
  const [showPsd2, setShowPsd2] = useState(false);
  const [showPsd3, setShowPsd3] = useState(false);

  const currEmail = localStorage.getItem("userEmail: ");
  const currPsd = localStorage.getItem("userPassword:");

  // const handleCurrPsd =(e)=> {
  //  const {handleCurrPsd} = e.target;
  //  if(handleCurrPsd !== currPsd){
  //   console.log("Old Password doesnt match")
  //  }
  //  else{
  //   console.log("old password is valid")
  //  }
  // }
  // const[userPsd1, setUserPsd1] = useState(currPsd) 
  // const[userPsd2, setUserPsd2] = useState(currPsd) 
  
  // const handlePsdChange1 =(e)=>{
  //   const { currPsd, value} = e.target;
  //   setUserPsd1({
  //     [currPsd]: value,
  //   });
  //   console.log("new Password:",userPsd1);
  // };
  
  // const handlePsdChange2 =(e)=>{
  //   const { currPsd, value} = e.target;
  //   setUserPsd2({
  //     [currPsd]: value,
  //   });
  //   console.log("Confirmed new Password:",userPsd2);
  // };

  const handleChangePsd = async () => {
    try {
      const response = await handleChangePsdAPI({ currEmail, currPsd }); 
      if (response.status) {
        console.log("Changes are saved");
        // setUserPsd()
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  }

  //  const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  // console.log(formData);
  return (
    <div>
      <ScrollToTop />
      <ToastContainer />
      <div className="pad-set">
        <div className="delivery-form mt-4">
          <div className="row">
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <IoIosLock className="fs-4" />
                </span>
                <input
                  placeholder="Old Password"
                  name="OldPassword"
                  // onChange={handleCurrPsd}
                  type={showPsd ? "password" : "text"}
                  className="form-control"
                  defaultValue=""
                />
                <span
                  className="input-group-text"
                  onClick={() => setShowPsd(!showPsd)}
                >
                  {showPsd ? (
                    <IoMdEyeOff className="fs-4" />
                  ) : (
                    <FaEye className="fs-4" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <IoIosLock className="fs-4" />
                </span>
                <input
                  placeholder="New Password"
                  name="NewPassword"
                  // onChange={handlePsdChange1}
                  type={showPsd2 ? "password" : "text"}
                  className="form-control"
                  defaultValue=""
                />
                <span
                  className="input-group-text"
                  onClick={() => setShowPsd2(!showPsd2)}
                >
                  {showPsd2 ? (
                    <IoMdEyeOff className="fs-4" />
                  ) : (
                    <FaEye className="fs-4" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="mb-3 input-group">
                <span className="input-group-text">
                  <IoIosLock className="fs-4" />
                </span>
                <input
                  placeholder="Confirm New Password"
                  name="ConfirmPassword"
                  type={showPsd3 ? "password" : "text"}
                  className="form-control"
                  // onChange={handlePsdChange2}
                  defaultValue=""
                />
                <span
                  className="input-group-text"
                  onClick={() => setShowPsd3(!showPsd3)}
                >
                  {showPsd3 ? (
                    <IoMdEyeOff className="fs-4" />
                  ) : (
                    <FaEye className="fs-4" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <p className="error-msg" style={{ textAlign: "left" }} />
          <div className="d-flex mt-3 gap-2">
            <button className="common-all-btn" onClick={handleChangePsd}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashUser4ChangePsd;
