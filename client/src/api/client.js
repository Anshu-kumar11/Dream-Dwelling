import axios from "axios";

const BASE_URL = "https://dream-dwelling.vercel.app/api/v1";
// const BASE_URL = "http://localhost:8000/api/v1";

const client = axios.create({
  baseURL: BASE_URL,
});

export default client;
