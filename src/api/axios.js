import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const baseURL = process.env.REACT_APP_BaseURL;

const instance = axios.create({
  baseURL: baseURL,
  params: {
    api_key: API_KEY,
    language: "ko-KR",
  },
});

export default instance;
