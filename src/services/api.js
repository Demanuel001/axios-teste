import axios from "axios";

// https://viacep.com.br/ws/64207585/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;