import axios from "axios";
const BASEURL = process.env.REACT_APP_BASE_URL_API;


// Login
export const handleLoginAPI = async (URLS, body) => {
  console.log("---------------------------------");
  try {
    console.log("-----------------------",body);

    const response = await axios.post(`${BASEURL}login`, body);
    console.log("response", response);
    if (response.data.status) {
      console.log("Login successful", response.data);
    }

    return response.data;
  } catch (error) {
    console.error("Error during login:", error.response.data);

    // Handle error, show error message, etc.
    throw error;
  }
};

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

    // Handle error, show error message, etc.
    throw error;
  }
};

// admin
export const handleAdminAPI = async (body) => {
  // try{
  //   const response = await
  // }
};
