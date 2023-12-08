import React from 'react';
import MainTitle from '../../../Components/UseableComponents/Title/MainTitle';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-1/4 min-h-screen bg-red-500'>
                    <div className='bg-black rounded-md w-44 mt-16 mx-auto  h-4/5'>
                        <ul className='text-center space-y-3 list-none font-maven  text-xl py-10'>
                            <li>
                                <NavLink to='/dashboard' className={({ isActive, }) =>
                                    isActive ? " no-underline px-3  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white  transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 text-black"
                                }>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addnewpet' className={({ isActive, }) =>
                                    isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 text-white hover:px-2 transition-all duration-700 "
                                }>
                                    Add New Pet
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addedpets' className={({ isActive, }) =>
                                    isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451]  rounded-md py-1 text-white hover:px-2 transition-all duration-700 "
                                }>
                                    Added Pets
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/myaddedpets' className={({ isActive, }) =>
                                    isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 text-white hover:px-2 transition-all duration-700 "
                                }>
                                    Show All Pets
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='w-full min-h-screen bg-yellow-500'>
                    <MainTitle maintitle={"Welcome To Dashboard"}></MainTitle>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;