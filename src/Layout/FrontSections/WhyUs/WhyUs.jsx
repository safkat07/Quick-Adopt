import React from 'react';
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import imgage1 from '../../../assets/safety-card-img.png'
import imgage2 from '../../../assets/specifically-card-img.png'
import img3 from '../../../assets/card-3-image-1.png'
const WhyUs = () => {
    return (
        <MainContainer>
            <p className='text-7xl font-semibold text-center pb-10 tracking-[.2em] font-monster'>Why <span className='text-6xl font-lobster'>QuickAdopt</span> </p>
            <div className='grid gap-5 grid-cols-3  '>
                <div className='flex flex-col justify-center items-center'>
                    <img src={imgage1} alt="" />
                    <p className='text-3xl font-maven text-center'>Safety Is Our Top Priority</p>
                    <p className='text-center max-w-sm leading-8 pt-2  font-monster'>At Fizgig, safety and security are our top-most priorities. We run thorough background checks on each carer’s file and only reliable pet sitter are selected in the on-boarding process. Plus, each pet sitter and walker has to pass a safety quiz before they can officially start on Fizgig. This way we ensure the utmost safety standards for you and your pet.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={imgage2} alt="" />
                    <p className='text-3xl font-maven text-center'>Specifically, For You
                    </p>
                    <p className='text-center max-w-sm leading-8 pt-2  font-monster'>Fizgig is the most customizable online pet care service out there, period! With us, you have the freedom to set numerous requirements, ranging from pet species to the duration and type of care and much more. We’re not just an app, but a family that’s here to help. We’re always delighted to provide you and your pet with the best experience possible</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={img3} alt="" />
                    <p className='text-3xl font-maven text-center'>Secure</p>
                    <p className='text-center max-w-sm  leading-8 pt-2  font-monster'>We understand that your personal information is valuable. Everything from your home address, ID and money is kept confidential and the sole focus can be on getting the best care for pets. To ensure safe and secure payments, we utilize Stripe as our payment service. The payment security measures also ensure pet sitters are paid for their time and care fairly.</p>
                </div>
            </div>
        </MainContainer>
    );
};

export default WhyUs;