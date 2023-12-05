import React from 'react';
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import img from '../../../assets/welove.png'
import './welove.css'
const WeLove = () => {
    return (
        <div className='bg-[#EBF1EE] w-full bg min-h-screen'>
            <MainContainer>
                <div className='flex justify-center items-center w-fit '>
                    <div className='w-1/2'>
                        <img className='w-[85%] transition-all hover:p-10 duration-1000 mx-auto' src={img} alt="" />
                    </div>
                    <div className='w-1/2'>
                        <h2 className='font-lobster text-6xl'> QuickAdopt</h2>
                        <p className='text-5xl font-monster pt-2'>The Pet
                            Sitting Platform For You</p>
                        <p className='text-xl text-justify font-monster pt-5'>We realize the intricacies of Pet Care: Pet preferences, unique requirements, and the ever changing nuances of everyday life. <span className='text-2xl font-lobster'>QuickAdopt</span> understands what Pet parents are looking for in a Pet Sitting service and the needs and preferences of Pet Sitter to deliver a platform that bring value to everyone. We bring you a diverse and sophisticated Pet Care ecosystem made by pet parents, for pet parents. We are well-aware of the struggles you face when you want to ensure the best care possible for your furry friends while you’re away. <span className='text-2xl font-lobster'>QuickAdopt</span> is here to help accomplish that without the slightest inconvenience to you, your Pet, and the Pet Sitter</p>
                    </div>
                </div>
            </MainContainer>
        </div>

    );
};

export default WeLove;