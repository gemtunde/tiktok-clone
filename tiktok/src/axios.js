import axios from 'axios';

const instance = axios.create({
    baseURL: "https://mern-tiktok-gemtunde.herokuapp.com",
});

export default instance;