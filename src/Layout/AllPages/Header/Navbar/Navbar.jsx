import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className=' bg-[#EBF1EE]'>
                <div className='flex  shadow-2xl px-5  h-20 lg:flex-row flex-col justify-between   items-center'>
                    <div className='flex  items-center'>
                        <a className='no-underline text-black' href="#">
                            <span className='text-3xl font-bold font-lobster tracking-[.4rem]'>QuickAdopt</span>
                        </a>
                    </div>
                    <div>
                        <ul className='list-none lg:flex-row flex-col text-center  font-maven text-xl  flex gap-6'>
                            <li><NavLink className={"no-underline text-black"}>
                                Home
                            </NavLink></li>
                            <li><NavLink className={"no-underline text-black"}>
                                Find A Puppy
                            </NavLink></li>
                            <li><NavLink className={"no-underline text-black"}>
                                About us
                            </NavLink></li>
                            <li><NavLink className={"no-underline text-black"}>
                                Stories
                            </NavLink></li>
                            <li><NavLink className={"no-underline text-black"}>
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