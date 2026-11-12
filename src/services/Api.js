import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.131.149:8080/WebApp6/api/v1',
});

export default api;