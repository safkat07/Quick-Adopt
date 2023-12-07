import React, { useContext, useState,  } from 'react';
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import img from '../../../assets/login.svg'
import { FaRegEye } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";


import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import UseAuth from '../../../Hooks/UseAuth';
import toast from 'react-hot-toast';

const Login = () => {
    const { loginUser, user } = UseAuth()
    const navigation = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
   
    const handleLoginForm = async (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
       const loadingId =  toast.loading("Looging in....")
        try {
            await loginUser(email, password)
            toast.success("Log In Complete", {id:loadingId})
            navigation('/')
        }
        catch (err) {
            toast.err(err.message, {id:loadingId})
        }
    }
    //handle see password
    const handleShowPassword = () => {

        setShowPassword(!showPassword)
        console.log(showPassword);
    }
    return (
        <MainContainer>

            <p className='text-center font-pacifico md:text-6xl text-3xl '>Hey, Beautiful!!</p>

            <div className='flex  w-full items-center flex-row-reverse  justify-around'>
                <div className='hidden lg:flex'>
                    <img src={img} alt="" />
                </div>
                <div>
                    <div className='bg-[#ebf1ee] rounded-3xl px-10 w-full h-full'>
                        <p className='md:text-3xl text-xl pt-10 text-center font-maven font-medium'>Welcome Back</p>
                        <form onSubmit={handleLoginForm} className='mt-2 '>
                            <div className=''>
                                <p className='font-maven text-xl py-2'>Enter your Email</p>
                                <input type="text"
                                    placeholder=' your email '
                                    name='email'
                                    className='text-start px-1 -mx-1  w-full py-3 placeholder-zinc-300  border-none  rounded-md' />
                            </div>
                            <div className=''>
                                <p className='font-maven text-xl py-2'>Enter your Password</p>
                                <input type={showPassword ? "password" : "text"}
                                    placeholder=' your password'
                                    name='password'
                                    className='text-left px-1 -mx-1  w-full py-3 placeholder-zinc-300  border-none  rounded-md' />
                            </div>

                            <div className='flex py-5  justify-center items-center'>
                                <input type="submit" value='Login' className="no-underline py-1 text-lg font-maven bg-[#6deaab] cursor-pointer border-none px-5 hover:bg-[#327451] rounded-md  hover:text-white hover:px-7 transition-all duration-700 text-black" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className='text-center  pb-10 font-maven text-sm'>New Here? please <Link className='hover:text-blue-600' to='/register'>Sign-Up</Link></p>

                        {
                            showPassword ? <div>
                                <button
                                    onClick={handleShowPassword}
                                    className='border-none text-xl bg-transparent absolute -mt-[243px] ml-[255px]'
                                >
                                    <IoEye></IoEye>
                                </button>
                            </div>
                                :
                                <div>
                                    <button
                                        onClick={handleShowPassword}
                                        className='border-none text-xl bg-transparent absolute -mt-[243px] ml-[255px]'
                                    >
                                        <IoMdEyeOff></IoMdEyeOff>
                                    </button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default Login;