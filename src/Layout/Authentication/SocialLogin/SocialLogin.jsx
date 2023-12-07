import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import MainContainer from "../../../Components/UseableComponents/MainContainer/MainContainer";


const SocialLogin = () => {
    return (
        <section>
            <div className="divider  text-xl font-maven border-b-4">
            Or Continue With
            </div>
                
            <div className="flex justify-center gap-3">
            <button className="border-none cursor-pointer text-xl text-blue-400">
                <FaGoogle></FaGoogle>
            </button>
            <button className="border-none text-xl cursor-pointer text-blue-400">
                <FaGithub></FaGithub>
            </button>
            
            </div>
        </section>
    );
};

export default SocialLogin;