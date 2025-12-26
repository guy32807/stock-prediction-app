import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API_URL;
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if(error.response.status === 401 && !originalRequest._retry){
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh_token");
      const response = await axiosInstance.post("/token/refresh/", {refresh: refreshToken});
      if(response.status === 200){
        localStorage.setItem("access_token", response.data.access);
        axiosInstance.defaults.headers["Authorization"] = `Bearer ${response.data.access}`;
        originalRequest.headers["Authorization"] = `Bearer ${response.data.access}`;
        return axiosInstance(originalRequest);
      }
    }   
    return Promise.reject(error);
  }
);  

export default axiosInstance;
