import axios from "axios";

const AxiosURL = axios.create({
    baseURL: 'http://localhost:5000/'
})
const UseAxiosBaseURL = () => {
    return AxiosURL
}
export default UseAxiosBaseURL