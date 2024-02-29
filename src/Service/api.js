import axios from "axios";
const BASEURL = process.env.REACT_APP_BASE_URL_API;

// Login
export const handleLoginAPI = async (body) => {
  try {
    // Make the API request without encrypting login data
    const response = await axios.post(`${BASEURL}login`, body);

    // Assuming the response contains necessary data
    console.log("Login successful", response.data);

    return response.data;
  } catch (error) {
    console.error("Error during login:", error);

    // Handle error, show error message, etc.
    throw error;
  }
};

// Signup
export const handleSignupAPI = async (URLS, param, body) => {
  try {
    // Make the API request without encrypting signup data
    const response = await axios.post(`${BASEURL}${URLS}`, body);

    console.log("Signup successful", response.data);
    
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error.response.data);

    // Handle error, show error message, etc.
    throw error;
  }
};
