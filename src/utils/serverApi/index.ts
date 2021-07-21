import axios from "axios";

const serverApi = axios.create({
    baseURL: `${process.env.SERVER_URL}/api`,
    timeout: 3000
    //headers: { "X-Custom-Header": "foobar" }
});

export default serverApi;
