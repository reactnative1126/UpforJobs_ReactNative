import axios from "axios";
import configs from "@constants/configs";

axios.defaults.baseURL = configs.apiURL;
axios.defaults.headers.common = { "Content-Type": "application/json" };
axios.defaults.responseType = "json";

export const setClientToken = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeClientToken = () => {
    delete axios.defaults.headers.common['Authorization'];
};

export default axios;