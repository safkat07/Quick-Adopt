import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import UseAuth from '../../../../Hooks/UseAuth';
import Hamburger from 'hamburger-react'
import toast from 'react-hot-toast';
import { useState } from 'react';

const Navbar = () => {
    const { user, logoutUser } = UseAuth()
    const [open, setOpen] = useState(false)
    const handleLogout = async () => {
        try {
            await logoutUser()
            toast.success("Logged out")
        }
        catch (err) {
            toast.error(err.message)
        }
    }
    // console.log(user);
    return (
        <div>
            <div className=' bg-[#EBF1EE]'>

                <div className='flex   px-5  h-28 flex-row  justify-between   items-center'>

                    <div className='flex flex-row items-center'>
                        <a className='no-underline text-black' href="#">
                            <span className='text-4xl font-bold font-lobster transition-all duration-700 hover:tracking-[.3em] tracking-[.4rem]'>QuickAdopt</span>
                        </a>
                    </div>

                    <div>
                        <div onClick={() => setOpen(!open)} className='block text-2xl font-bold lg:hidden'>
                            <Hamburger ></Hamburger>
                        </div>
                        <ul className={open ? "list-none absolute bg-[#EBF1EE] w-full  right-0 top-28 transition-all duration-700  min-h-[80vh] space-y-7 text-4xl flex-row  text-right px-20  font-maven   lg:flex gap-10" : "list-none transition-all duration-700 hidden bg-[#EBF1EE] w-full left-0 right-0 top-24  flex-row  text-center  font-maven text-xl  lg:flex gap-6"}>
                            <li><NavLink to='/' className={({ isActive, }) =>
                                isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"
                            }>
                                Home
                            </NavLink></li>
                            <li><NavLink to='/find' className={({ isActive, }) =>
                                isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                Find A Puppy
                            </NavLink></li>
                            <li><NavLink to='/about' className={({ isActive, }) =>
                                isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                About Us
                            </NavLink></li>
                            <li><NavLink to='/stories' className={({ isActive, }) =>
                                isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                Stories
                            </NavLink></li>

                            {
                                user ? <li><NavLink onClick={handleLogout} className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                    Logout
                                </NavLink></li> :
                                    <li><NavLink to='/login' className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                        Login
                                    </NavLink></li>
                            }

                        </ul>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;