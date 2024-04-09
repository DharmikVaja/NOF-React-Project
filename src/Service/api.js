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

// OTP verification

export const handleOtpVerificationAPI = async (
  { email, otp, type, daily_email_notify, daily_whatsApp_notify },
  body
) => {
  try {
    console.log("---------------------------------------");
    // console.log("Data to be sent:", {
    //   email: email,
    //   otp: otp,
    //   type: type,
    //   daily_email_notify: daily_email_notify,
    //   daily_whatsApp_notify: daily_whatsApp_notify,
    // });
    const response = await axios.post(`${BASEURL}verify-otp`, {
      email,
      otp,
      type,
      daily_email_notify,
      daily_whatsApp_notify,
    });
    console.log("response status:", response.status);

    if (response.status) {
      console.log("OTP verification successful");
      return true;
    } else {
      console.error("OTP verification failed:", response.data.message);
      return false;
    }
  } catch (error) {
    console.error("Error during OTP verification:", error);
    return false;
  }
};

// SubmitForm
export const handleSubmitAPI = async (formData) => {
  try {
    const response = await axios.post(`${BASEURL}contact-us`, formData);
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("Something went wrong:", error.response);
    throw error;
  }
};

//get books
export const handleGetBook = async (body) => {
  try {
    const response = await axios.post(`${BASEURL}get-books`, body);
    // if(response)
    console.log(response);
  } catch (err) {
    console.error("error while getting books", err);
  }
};

// change password

export const handleChangePsdAPI = async (body) => {
  try {
    const response = await axios.post(`${BASEURL}reset-password`);
    if (response.data.status) {
      console.log("request submitted: ", response.data.status);
    }
  } catch (error) {
    console.log("something went wrong: ", error.response.data);
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
