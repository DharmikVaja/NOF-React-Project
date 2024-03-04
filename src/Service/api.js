import axios from "axios";
const BASEURL = process.env.REACT_APP_BASE_URL_API;

// Login
export const handleLoginAPI = async ({email, password},URLS, body) => {
  try {
    console.log("UserData:", {email, password});

    const response = await axios.post(`${BASEURL}login`, {email, password});
    const { status, message, data: userData } = response.data;
    // console.log("response", response);
    if (response.data.status) {
      console.log('Login successful');
    } else {
      console.error(response.data.message);
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

