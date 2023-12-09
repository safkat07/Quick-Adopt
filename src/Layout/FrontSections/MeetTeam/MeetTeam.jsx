import React from 'react';
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import img1 from '../../../assets/Jimena_img.png'
import img2 from '../../../assets/Shemanna_img.png'
import img3 from '../../../assets/Stephanie_img.png'
import MainTitle from '../../../Components/UseableComponents/Title/MainTitle';
const MeetTeam = () => {
    return (
        <MainContainer>
            <MainTitle maintitle={"Meet The Team"}></MainTitle>
            <div className='grid  pt-10 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 justify-center gap-y-5 items-center'>
                <div className='text-center'>
                    <img className='transition-all duration-1000 hover:p-5 ' src={img1} alt="" />
                    <p className='text-xl mt-3 font-monster'>Jimena Ulloa</p>
                    <p className='font-maven'>Chief Marketing Officer</p>
                </div>
                <div className='text-center'>
                    <img className='transition-all duration-1000 hover:p-5 ' src={img2} alt="" />
                    <p className='text-xl mt-3 font-monster'>Stephanie Cobelo</p>
                    <p className='font-maven'>Chief Communications  Officer</p>
                </div>
                <div className='text-center'>
                    <img className='transition-all duration-1000 hover:p-5 ' src={img3} alt="" />
                    <p className='text-xl mt-3 font-monster'>Shemanna McLawrence</p>
                    <p className='font-maven'>Chief Financial  Officer</p>
                </div>
            </div>
        </MainContainer>
    );
};

export default MeetTeam;