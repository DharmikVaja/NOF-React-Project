import axios from "axios";
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
    console.error("Error during signup:", error.response);
    // console.log(error.response.data.message)
    // Handle error, show error message, etc.
    throw error;
  }
};
//Submit Form
export const handleSubmitAPI = async (body) => {
  // console.log("---------")
  try {
    const response = await axios.post(`${BASEURL}contact-us`, body);
    console.log("response", response);
    if (response.data.status) {
      alert("Your Response is saved successfully");
      console.log("Form is submitted");
    } else {
      console.error("Something went wrong:", response.data.message);
    }
  } catch (error) {
    console.error("Something went wrong:", error.response.message);
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

// export const handleActLogAPI = async (body)=>{
//   try{
//     console.log("----------------------");
//   }
//   catch{

//   }
// }
// export const BookAPI = async (body) => {
//   try {
//     const response = await axios.post(`${BASEURL}product`, body);
//     return response.data;
//   } catch (error) {
//     console.error("Error in BookAPI", error);
//     throw error;
//   }
// };
