import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASEURL = process.env.REACT_APP_BASE_URL_API;
const navigate= useNavigate

// Login
export const handleLoginAPI = async (URLS, body) => {
  try {
    console.log("UserData:", body);

    const response = await axios.post(`${BASEURL}login`, body);
    const { status, message, data: userData } = response.data;
    // console.log("response", response);
    if (status) {
      console.log('Login successful');
      navigate('/user-dashboard');
    } else {
      throw new Error(message);
    }

    return { status, message, userData };
  } catch (error) {
    console.error('Error during login:', error.message);

    // Handle error, show error message, etc.
    throw error;
  }
}

// Signup
export const handleSignupAPI = async (body) => {
  try {
    console.log("-------------------");
    // Make the API request
    const response = await axios.post(`${BASEURL}signup`, body);
    console.log("response", response);
    if (response.data.status) {
      console.log("Signup successful");
    } else {
      console.error("signup failed:", response.data.message);
    }

    // return response.data;
  } catch (error) {
    console.error("Error during signup:", error.response.data);
    // console.log(error.response.data.message)
    // Handle error, show error message, etc.
    throw error;
  }
};


