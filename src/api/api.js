import axios from "axios";

const BASE_URL = "https://api.digikala.com/v1";
const api = axios.create({ baseURL: BASE_URL });
export { api };
