import React from 'react';

const PetCategoryCard = ({ img }) => {
    return (
        <div className='bg-[#EBF1EE] mx-auto w-72 h-72 rounded-full'>
            <div className='w-full h-full mx-auto flex justify-center items-center'>
                <img className='w-full h-full  mx-auto rounded-full' src={img} alt="" />
            </div>
        </div>
    );
};

export default PetCategoryCard