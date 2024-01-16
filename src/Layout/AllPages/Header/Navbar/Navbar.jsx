import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import UseAuth from '../../../../Hooks/UseAuth';
import Hamburger from 'hamburger-react'
import toast from 'react-hot-toast';
import { useState } from 'react';
import Headroom from 'react-headroom';
import { motion } from 'framer-motion';
import UseRequestedPets from '../../../../Hooks/UseRequestedPets';
import UseFavorites from '../../../../Hooks/UseFavorites';
import UseUserRequest from '../../../../Hooks/UseUserRequest';

const Navbar = () => {
    const { user, logoutUser } = UseAuth()
    const [open, setOpen] = useState(false)
    const [allRequestedPets, isLoading] = UseRequestedPets()
    const [favPets] = UseFavorites()
    const [userReq] = UseUserRequest()
    const handleLogout = async () => {
        try {
            await logoutUser()
            toast.success("Logged out")
        }
        catch (err) {
            toast.error(err.message)
        }
    }

    //close by navlinks
    const closeNav = () => {
        setOpen(false)
    }
    // console.log(user);
    return (
        <Headroom>
            <div>
                <div className=' bg-[#EBF1EE]'>

                    <motion.div
                        initial={{ y: -250 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className='flex   px-5  h-24 flex-row  justify-between   items-center'>

                        <motion.div

                            className='flex flex-row items-center'>
                            <a className='no-underline text-black' href="/">
                                <span className='text-4xl font-bold font-lobster transition-all duration-700 hover:tracking-[.3em] tracking-[.4rem]'>QuickAdopt</span>
                            </a>
                        </motion.div>

                        <div>
                            <div onClick={() => setOpen(!open)} className='block text-2xl font-bold lg:hidden'>
                                <Hamburger ></Hamburger>
                            </div>
                            <div className='lg:hidden  flex'>
                                <ul className={open ? "list-none absolute bg-[#EBF1EE] w-full   top-20 pt-4 transition-all  duration-700  md:min-h-screen min-h-[55vh] space-y-7 md:text-4xl text-3xl flex-row  text-right px-20  font-maven right-0 scroll-smooth  lg:flex gap-10"
                                    :
                                    "list-none absolute md:text-4xl  md:min-h-screen min-h-[55vh] top-20 transition-all inset-y-0 opacity-0 duration-1000 pt-4 right-0 transform -translate-x-full ease-in-out overflow-hidden  space-y-7 text-3xl flex-row text-right font-maven lg:flex gap-10"}
                                    onClick={() => setOpen(!open)}
                                >
                                    <li><NavLink to='/' className={({ isActive, }) =>
                                        isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline  hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"
                                    }>
                                        Home
                                    </NavLink></li>
                                    <li><NavLink to='/findapuppy' className={({ isActive, }) =>
                                        isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                        Find A Puppy
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
                                    <li><NavLink to='/dashboard' className={({ isActive, }) =>
                                        isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                        Dashboard {allRequestedPets.length > 0 && allRequestedPets.length}
                                    </NavLink></li>

                                </ul>
                            </div>

                            <ul className="list-none transition-all duration-700 hidden  bg-[#EBF1EE]    flex-row  text-center  font-maven text-xl  lg:flex gap-6">
                                <motion.li

                                ><NavLink to='/' className={({ isActive, }) =>
                                    isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"
                                }>
                                        Home
                                    </NavLink></motion.li>
                                <motion.li

                                ><NavLink to='/findapuppy' className={({ isActive, }) =>
                                    isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                        Find A Puppy
                                    </NavLink></motion.li>

                                {/* <motion.li
                                    initial={{ y: -250 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 3.5 }}
                                ><NavLink to='/stories' className={({ isActive, }) =>
                                    isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                        Stories
                                    </NavLink></motion.li> */}

                                {
                                    user ? <motion.li

                                    ><NavLink onClick={handleLogout} className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                            Logout
                                        </NavLink></motion.li> :
                                        <motion.li

                                        ><NavLink to='/login' className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                                Login
                                            </NavLink></motion.li>
                                }
                                {
                                    user && <motion.li

                                    ><NavLink to='/favourites' className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                            Favourites ({favPets.length > 0 ? favPets.length : 0})
                                        </NavLink></motion.li>
                                }
                                {
                                    user && <motion.li

                                    ><NavLink to='/requested' className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                            Requested ({userReq.length > 0 ? userReq.length : 0})
                                        </NavLink></motion.li>
                                }
                                {user && <motion.li

                                ><NavLink to='/dashboard' className={({ isActive, }) =>
                                    isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                        Dashboard ({allRequestedPets.length > 0 ? allRequestedPets.length : 0})
                                    </NavLink></motion.li>}

                            </ul>





                        </div>
                    </motion.div>
                </div>
            </div>
        </Headroom>
    );
};

export default Navbar;