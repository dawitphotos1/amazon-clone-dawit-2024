import axios from 'axios'


const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-dawit-2024/us-central1/api",

  // Deployed version of amazon server on render.com
  baseURL: "https://amazon-api-g3dp.onrender.com",
});

export {axiosInstance}