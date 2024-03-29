import React from 'react';
import MainTitle from '../../../Components/UseableComponents/Title/MainTitle';
import { NavLink, Outlet } from 'react-router-dom';
import DashboardTitle from '../../../Components/UseableComponents/DashboardTitle/DashboardTitle';
import UseRequestedPets from '../../../Hooks/UseRequestedPets';

const Dashboard = () => {
    const [allRequestedPets, isLoading] = UseRequestedPets()
    return (
        <div>
            <div className='flex'>
                <div className='lg:w-64 md:w-32  min-h-screen bg-gray-700'>
                    <div className='bg-black rounded-md lg:w-52 md:w-20 mt-16 mx-auto  h-4/5'>
                        <p className='text-center pt-10 font-semibold font-lobster lg:text-3xl text-stone-300'>QuickAdopt</p>
                        <p className='text-end lg:text-xs text-sm mr-1 pt-1 font-maven text-stone-300'>Trusted pet adaption platform</p>
                        <ul className='text-center space-y-3 list-none font-maven text-sm  lg:text-xl py-10'>
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
                                    Add a New Pet
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addedpets' className={({ isActive, }) =>
                                    isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451]  rounded-md py-1 text-white hover:px-2 transition-all duration-700 "
                                }>
                                    My added Pets
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/requestedpets' className={({ isActive, }) =>
                                    isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451]  rounded-md py-1 text-white hover:px-2 transition-all duration-700 "
                                }>
                                    Requested Pets
                                    ({allRequestedPets.length})

                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to='/dashboard/myaddedpets' className={({ isActive, }) =>
                                    isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 text-white hover:px-2 transition-all duration-700 "
                                }>
                                    Show All Pets
                                </NavLink>
                            </li> */}
                            {/* <li>
                                <NavLink to='/dashboard/successtories' className={({ isActive, }) =>
                                    isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 text-white hover:px-2 transition-all duration-700 "
                                }>
                                    Add Your Success Stories
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink to='/' className={({ isActive, }) =>
                                    isActive ? " no-underline  hover:bg-[#327451] text-[#C78646] rounded-md py-1 hover:text-white hover:px-2 transition-all duration-700 " : "no-underline hover:bg-[#327451] rounded-md py-1 text-white hover:px-2 transition-all duration-700 "
                                }>
                                    Back to Website
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='w-full min-h-screen bg-[#EBF1EE]'>
                    <div className='text-center'>
                        {/* <DashboardTitle dashtitle={"Welcome to Dashboard"}></DashboardTitle> */}
                        {/* {allRequestedPets.length} */}
                    </div>

                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;