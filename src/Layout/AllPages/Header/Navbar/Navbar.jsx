import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import UseAuth from '../../../../Hooks/UseAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, logoutUser } = UseAuth()
    const handleLogout = async () => {
        try {
            await logoutUser()
            toast.success("Logged out")
        }
        catch (err) {
            toast.error(err.message)
        }
    }
    console.log(user);
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
                        <ul className='list-none hidden  flex-row  text-center  font-maven text-xl  lg:flex gap-6'>
                            <li><NavLink className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                Home
                            </NavLink></li>
                            <li><NavLink className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                Find A Puppy
                            </NavLink></li>
                            <li><NavLink className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                About Us
                            </NavLink></li>
                            <li><NavLink className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
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

                        <HiOutlineMenuAlt1 className='block text-2xl font-bold lg:hidden'></HiOutlineMenuAlt1>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;