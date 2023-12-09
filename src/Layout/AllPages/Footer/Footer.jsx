import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import img from '../../../assets/layered-waves-haikei.png'
import { FaFacebookSquare, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#EBF1EE]  lg:h-[50vh]'>
            <div className='max-w-4xl mx-auto'>
                <div className='flex lg:flex-row flex-col  items-center justify-between'>
                    <div className='lg:text-start text-center'>
                        <h2 className='lg:text-7xl text-4xl transition-all duration-1000 hover:tracking-[.1em] pt-20 font-lobster font-semibold'>QuickAdopt</h2>
                        <p className='text-2xl transition-all duration-1000 hover:tracking-[.1em] font-maven pt-10'>Copyright © 2023. All rights reserved.</p>
                    </div>
                    <div>
                        <div className='text pt-5 lg:pt-20 space-x-10 text-3xl'>
                            <FaFacebookSquare className='transition-all duration-700 hover:px-2'></FaFacebookSquare>
                            <FaSquareXTwitter  className='transition-all duration-700 hover:px-2'></FaSquareXTwitter>
                            <FaInstagram  className='transition-all duration-700 hover:px-2'></FaInstagram>
                            <FaTelegramPlane className='transition-all duration-700 hover:px-2'></FaTelegramPlane>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;