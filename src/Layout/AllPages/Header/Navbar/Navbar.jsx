import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className=' bg-[#EBF1EE]'>
                <div className='flex  shadow-2xl px-5  h-28 lg:flex-row flex-col justify-between   items-center'>
                    <div className='flex  items-center'>
                        <a className='no-underline text-black' href="#">
                            <span className='text-4xl font-bold font-lobster transition-all duration-700 hover:tracking-[.3em] tracking-[.4rem]'>QuickAdopt</span>
                        </a>
                    </div>
                    <div>
                        <ul className='list-none lg:flex-row flex-col text-center  font-maven text-xl  flex gap-6'>
                            <li><NavLink className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                Home
                            </NavLink></li>
                            <li><NavLink className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                Find A Puppy
                            </NavLink></li>
                            <li><NavLink className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                About us
                            </NavLink></li>
                            <li><NavLink className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                Stories
                            </NavLink></li>
                            <li><NavLink className={"no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"}>
                                Login
                            </NavLink></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;