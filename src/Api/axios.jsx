import axios from 'axios'


const axiosInstance = axios.create({
  baseURL: "https://amazon-api-g3dp.onrender.com",
});

export {axiosInstance}