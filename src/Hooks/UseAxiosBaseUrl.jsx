import axios from "axios";

const AxiosURL = axios.create({
    baseURL: 'https://quick-adopt-server-side.vercel.app/'
})
const UseAxiosBaseURL = () => {
    return AxiosURL
}
export default UseAxiosBaseURL