import axios from "axios";

const dev = "http://localhost:3001/"
const api = axios.create({
    baseURL:dev,
    headers:{
        "Content-Type":"application/json"
    },
})

export default api