import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import MainContainer from "../../../Components/UseableComponents/MainContainer/MainContainer";
import UseAuth from "../../../Hooks/UseAuth";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";


const SocialLogin = () => {
    const { loginGithub, loginGoogle } = UseAuth()
    const navigate = useNavigate()
    const handleLogin = async (media) => {
        const loadId = toast.loading("Loading Please wait....")
        try {
            await media()
            toast.success('Login success', { id: loadId })
            navigate('/')
        }
        catch (err) {
            toast.error(err.message, { id: loadId })
        }
    }
    return (
        <section>
            <div className="divider  text-xl font-maven border-b-4">
                Or Continue With
            </div>

            <div onClick={() => handleLogin(loginGoogle)} className="flex justify-center gap-3">
                <button className="border-none cursor-pointer text-xl text-blue-400">
                    <FaGoogle></FaGoogle>
                </button>
                <button onClick={() => handleLogin(loginGithub)} className="border-none text-xl cursor-pointer text-blue-400">
                    <FaGithub></FaGithub>
                </button>

            </div>
        </section>
    );
};

export default SocialLogin;