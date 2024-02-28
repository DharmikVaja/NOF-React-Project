import axios from "axios";
import CryptoJS from "crypto-js";
const BASEURL = process.env.REACT_APP_BASE_URL_API;
const secretKey = process.env.REACT_APP_SECRET_KEY;

function encryptValue(value) {
  return CryptoJS.AES.encrypt(value, secretKey).toString();
}

// Login
export const handleLoginAPI = async (body) => {
  const encryptedData = {
    email: encryptValue(body.email),
    password: encryptValue(body.password),
  };

  try {
    const response = await axios.post(`${BASEURL}login`, encryptedData);

    // Assuming the response contains necessary data
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error during login:", error);

    // Handle error, show error message, etc.
    throw error;
  }
};
//

export const handleSignupAPI = async (URLS, param, body) => {
  const encryptedData = {};
  for (const key in body) {
    encryptedData[key] = encryptValue(body[key]);
  }

  console.log("encryptedData", encryptedData);
  await axios
    .post(`${BASEURL}${URLS}`, encryptedData)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log("something wrong", error);
    });
};

export const APIEncryption = async (url, queryParams, body, headers = {}) => {
  const isProduction = process.env.REACT_APP_ENVIRONMENT === "production";

  const getHeaders = (headers = {}) => {
    const token = localStorage.getItem("auth-token");
    let headerObj = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...headers,
    };
    if (token) {
      headerObj.Authorization = `Bearer ${token}`;
    }
    return headerObj;
  };
  const encryptionBody = {
    data: CryptoJS.AES.encrypt(JSON.stringify(body), secretKey).toString(),
  };
  try {
    let requestHeaders = getHeaders(headers);
    const response = await axios.post(
      BASEURL + url,
      isProduction === "true" ? encryptionBody : body,
      {
        params: queryParams,
        headers: requestHeaders,
        validateStatus: function (status) {
          return status >= 200 && status < 400; // Resolve only if the status is between 200 and 399
        },
      }
    );
    if (isProduction === "true") {
      let decryptdata = CryptoJS.AES.decrypt(
        response.data?.data,
        secretKey
      ).toString(CryptoJS.enc.Utf8);

      return JSON.parse(decryptdata);
    }
    return response.data;
  } catch (error) {
    console.error(error?.response?.status);
    if (error?.response?.status === 403 || error?.response?.status === 401) {
      let data = localStorage.getItem("rememberMe") || [];
      localStorage.clear();
      localStorage.setItem("rememberMe", data);

      window.location.href = "/sign-in";
    }
    // throw error;
  }
};
