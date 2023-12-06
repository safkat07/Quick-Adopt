import React from 'react';
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import { FaVanShuttle } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlinePets } from "react-icons/md";

const Services = () => {
    return (
        <MainContainer>
            <div className='flex justify-between flex-wrap  '>
                <div className='bg-[#EBF1EE] hover:p-5 transition-all duration-700 rounded-2xl flex justify-center items-center w-96 h-96'>
                    <div>
                        <div className='text-center text-3xl'>
                            <FaVanShuttle ></FaVanShuttle>
                        </div>
                        <p className='text-center font-maven font-semibold text-3xl'>24/7 Delivery</p>
                        <p className='text-lg pt-2 font-monster text-center '>24/7 pet delivery ensures your furry friends receive the utmost care and attention, any time of day or night. </p>
                    </div>
                </div>
                <div className='bg-[#EBF1EE] hover:p-5 transition-all duration-700 flex rounded-2xl justify-center items-center w-96 h-96'>
                    <div>
                        <div className='text-center text-3xl'>
                            <FaUserDoctor ></FaUserDoctor>
                        </div>
                        <p className='text-center font-maven font-semibold text-3xl'>Home Doctor</p>
                        <p className='text-lg pt-2 font-monster text-center '>24/7 pet delivery ensures your furry friends receive the utmost care and attention, any time of day or night. </p>
                    </div>
                </div>
                <div className='bg-[#EBF1EE] hover:p-5 transition-all duration-700  rounded-2xl flex justify-center items-center w-96 h-96'>
                    <div>
                        <div className='text-center text-3xl'>
                            <MdOutlinePets ></MdOutlinePets>
                        </div>
                        <p className='text-center font-maven font-semibold text-3xl'>Healthy Pet</p>
                        <p className='text-lg pt-2 font-monster text-center '>24/7 pet delivery ensures your furry friends receive the utmost care and attention, any time of day or night. </p>
                    </div>
                </div>
                
            </div>
        </MainContainer>
    );
};

export default Services;