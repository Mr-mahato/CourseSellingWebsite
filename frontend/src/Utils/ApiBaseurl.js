import axios from "axios";

const dev = "http://localhost:3002/"
const api = axios.create({
    baseURL:dev,
    headers:{
        "Content-Type":"application/json"
    },
})

export default api