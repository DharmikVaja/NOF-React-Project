import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
const BASEURL = process.env.REACT_APP_BASE_URL_API;

// Login
export const handleLoginAPI = async ({ email, password }, URLS, body) => {
  try {
    console.log("UserData:", { email, password });

    const response = await axios.post(`${BASEURL}login`, { email, password });
    const { status, message, data: userData } = response.data;
    // console.log("response", response);
    if (response.data.status) {
      console.log("Login successful");
    } else {
      console.error(response.data.message);
    }
    return { status, message, userData };
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
};
// Signup

export const handleSignupAPI = async ({
  studentName,
  email,
  password,
  phoneNumber,
  countryCode,
}) => {
  try {
    console.log("userData: ", {
      studentName,
      email,
      password,
      phoneNumber,
      countryCode,
    });
    // const userData= {studentName, email, password, phoneNumber, countryCode}
    const response = await axios.post(`${BASEURL}signup`, {
      studentName,
      email,
      password,
      phoneNumber,
      countryCode,
    });
    console.log("response", response);
    if (response.data.status) {
      console.log("Signup successful");
      localStorage.setItem("token", response.data.data.token);
    } else {
      console.error("Signup failed:", response.data.message);
    }
    return response;
  } catch (error) {
    console.error("Error during signup:", error.response.data);
    throw error;
  }
};

// SubmitForm

export const handleSubmitAPI = async ({
  first_name,
  last_name,
  phone,
  countryCode,
  email,
  comment,
}) => {
  try {
    console.log("formData:", {
      first_name,
      last_name,
      phone,
      countryCode,
      email,  
      comment,
    });
    const response = await axios.post(`${BASEURL}contact-us`, {
      first_name,
      last_name,
      phone,
      countryCode,
      email,
      comment,
    });
    console.log("response", response);
    if (response.data.status) {
      console.log("Form is submitted");
      alert("Your Response is saved successfully");
      // localStorage.setItem("FormData", JSON.stringify(formData));
    } else {
      console.error("Something went wrong:", response.data.message);
    }
    return response;
  } catch (error) {
    console.error("Something went wrong:", error.response.data);
    throw error;
  }
};
// export const handleAdminAPI = async ({ email, password }, URLS, body) => {
//   try {
//     console.log("---------------");
//     console.log("UserData:", { email, password });

//     const response = await axios.post(`${BASEURL}admin`, { email, password });
//     const { status, message, data: userData } = response.data;
//     // console.log("response", response);
//     if (response.data.status) {
//       console.log("Login successful");
//     } else {
//       console.error(response.data.message);
//     }
//     return { status, message, userData };
//   } catch (error) {
//     console.error("Error during login:", error.message);
//     throw error;
//   }
// };
