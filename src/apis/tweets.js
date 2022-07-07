import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:3001"
})
// for deployment
// https://my-json-server.typicode.com/normal64/twitterDB