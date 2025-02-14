import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

const fetcher = (url) => axios.get(url).then((response) => response.data);
export default fetcher;
