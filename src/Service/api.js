import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASEURL = process.env.REACT_APP_BASE_URL_API;

const navigate = useNavigate;

// Login
export const handleLoginAPI = async (URLS, body) => {
  try {
    const response = await axios.post(`${BASEURL}${URLS}`, body);
    console.log("Login successful", response.data);

    return response.data;
  } catch (error) {
    console.error("Error during login:", error.response.data);

    // Handle error, show error message, etc.
    throw error;
  }
};

// Signup
export const handleSignupAPI = async ( body) => {
  try {
    // Make the API request
    const response = await axios.post(`${BASEURL}signup`, body);
    if (response.data.status) {
      navigate("/login");
    } else{
      console.error("signup failed:", response.data.message);
    }

    // return response.data;
  } catch (error) {
    console.error("Error during signup:", error.response.data);

    // Handle error, show error message, etc.
    throw error;
  }
};
