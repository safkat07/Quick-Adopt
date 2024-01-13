import React from 'react';
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import img1 from '../../../assets/card-one-img.png'
import img2 from '../../../assets/card-two-img.png'
import img3 from '../../../assets/Frame-10.png'
import arrow from '../../../assets/easy-step-arrow.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainTitle from '../../../Components/UseableComponents/Title/MainTitle';

const FindPuppy = () => {
    return (
        <MainContainer >
            <MainTitle maintitle={"Find Trusted Pet Care In 3 Easy Steps"}></MainTitle>
            <div className='flex flex-col md:px-4 lg:px-0  md:flex-row items-center justify-center gap-x-2 lg:gap-x-7'>
                <div className='bg-[#EBF1EE]  lg:hover:p-10 transition-all duration-700   w-10/12 h-[480px] rounded-3xl'>
                    <div className='flex relative justify-center  items-center'>
                        <img className='absolute  top-28' src={img1} alt="" />

                    </div>
                    <p className='text-7xl tracking-[.5rem] ml-5 mt-5 text-white font-pacifico font-bold'>01</p>
                    <div className=''>
                        <p className='lg:text-3xl text-xl mt-72 font-semibold font-maven text-[#737373]  text-center'>Tell Us About Your pet</p>
                    </div>
                </div>
                <div>
                    <img className='hidden lg:flex' src={arrow} alt="" />
                </div>
                <div className='bg-[#EBF1EE] lg:hover:p-10 transition-all duration-700  mt-8 lg:mt-40 w-10/12  h-[480px] rounded-3xl'>
                    <div className='flex relative justify-center  items-center'>
                        <img className='absolute top-28' src={img2} alt="" />
                    </div>
                    <p className='text-7xl tracking-[.5rem] ml-5 mt-5 text-white font-pacifico font-bold'>02</p>
                    <div className=''>
                        <p className='lg:text-3xl text-xl mt-72 font-semibold font-maven text-[#737373]  text-center'>Select a Pet sitter</p>
                    </div>
                </div>
                <div className='hidden lg:flex  mb-40'>
                    <img src={arrow} alt="" />
                </div>
                <div className='bg-[#EBF1EE]  lg:hover:p-10 transition-all duration-700 w-10/12 mt-8  h-[480px] rounded-3xl'>
                    <div className='flex relative justify-center  items-center'>
                        <img className='absolute top-28' src={img3} alt="" />

                    </div>
                    <p className='text-7xl tracking-[.5rem] ml-5 mt-5 text-white font-pacifico font-bold'>03</p>
                    <div className=''>
                        <p className='lg:text-3xl text-xl mt-72 font-semibold font-maven text-[#737373]  text-center'>Choose a service & date</p>
                    </div>
                </div>
            </div>

        </MainContainer>
    );
};

export default FindPuppy;