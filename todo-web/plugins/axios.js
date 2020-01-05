import axios from "axios";

export default axios.create({
    baseURL: process.env.DEV_API_ENDPOINT
})