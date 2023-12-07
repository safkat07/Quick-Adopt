import React, { useContext, useState } from 'react';
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import img from '../../../assets/undraw_login_re_4vu2.svg'
import { FaRegEye } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

import { useForm } from 'react-hook-form';
import UseAuth from '../../../Hooks/UseAuth';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { user, createUser } = UseAuth()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const loadId = toast.loading('Registration Processing....')
        try {
            createUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user
                updateProfile(user, {
                    displayName:data.name
                })
                toast.success('Registration Complete', { id: loadId })
            navigate('/')
            })
            .catch((err) => {
                toast.error(err.message)
            })
        }
        catch (err) {
            toast.err(err.message, { id: loadId })
        }
    }


    //handle see password
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
        console.log(showPassword);
    }
    return (
        <section className='xl:max-w-5xl rounded-xl bg-[#ebf1ee] md:max-w-2xl max-w-sm mt-10 mx-auto'>
            <div className='flex    justify-around'>

                <div className=' px-10 '>
                    <p className='md:text-3xl text-xl pt-10 text-center font-maven font-medium'>Register Here</p>
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-2 '>
                        <div className='flex flex-col'>
                            <p className='font-maven md:text-start text-center md:text-xl py-2'>Enter your Name</p>
                            <input type="text"
                                placeholder=' your name '
                                name='name'
                                {...register("name", { required: true })}
                                className='text-start px-1 mx-auto  md:-mx-1 w-3/4 md:w-96   py-3 placeholder-zinc-300  border-none  rounded-md' />
                            {errors.name && <span className='text-xs font-maven text-red-700'>Name is required</span>}
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-maven md:text-start text-center md:text-xl py-2'>Enter your Email</p>
                            <input type="text"
                                placeholder=' your email '
                                name='email'
                                {...register("email", { required: true })}
                                className='text-start px-1 mx-auto  md:-mx-1  w-3/4 md:w-96   py-3 placeholder-zinc-300  border-none  rounded-md' />
                            {errors.email && <span className='text-xs font-maven text-red-700'>Email is required</span>}
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-maven md:text-start text-center md:text-xl py-2'>Enter your Password</p>
                            <input type={showPassword ? "password" : "text"}
                                placeholder=' your password'
                                name='password'
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/
                                })}
                                className='text-left px-1 mx-auto  md:-mx-1  w-3/4 md:w-96   py-3 placeholder-zinc-300  border-none  rounded-md' />
                            <br />
                            {errors.password && <span className='text-xs font-maven text-red-700'>Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-xs font-maven text-red-700'>Password must be  6 characters.</span>}
                            {errors.password?.type === 'pattern' && <span className='text-xs font-maven text-red-700'>Must have uppercase,lowercase,number & special character.</span>}
                        </div>

                        <div className='flex py-5  justify-center items-center'>
                            <input type="submit" value='Register' className="no-underline py-1 text-lg font-maven bg-[#6deaab] cursor-pointer border-none px-5 hover:bg-[#327451] rounded-md  hover:text-white hover:px-7 transition-all duration-700 text-black" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='text-center  pb-7 font-maven text-sm'>Already Have an Account? please <Link className='hover:text-blue-600' to='/login'>Log-in</Link></p>

                    {/* <div className='absolute'>
                        {
                            showPassword ? <div>
                                <button
                                    onClick={handleShowPassword}
                                    className='border-none text-xl bg-transparent absolute -mt-[250px] ml-[350px]'
                                >
                                    <IoEye></IoEye>
                                </button>
                            </div>
                                :
                                <div>
                                    <button
                                        onClick={handleShowPassword}
                                        className='border-none text-xl bg-transparent absolute -mt-[250px] ml-[350px]'
                                    >
                                        <IoMdEyeOff></IoMdEyeOff>
                                    </button>
                                </div>
                        }
                    </div> */}
                </div>
            </div>

        </section>
    );
};

export default Register