import axios from 'axios';

const api = axios.create({
    baseURL:'https://blog-react-json-server.onrender.com/'
});
export default api;