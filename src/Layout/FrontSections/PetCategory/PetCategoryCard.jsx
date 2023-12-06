import React from 'react';
import { Link } from 'react-router-dom';

const PetCategoryCard = ({ img,
  petCategory, _id }) => {
  return (
    <Link to={`/singlepetcategory/${_id}`}>
      <div className='bg-[#EBF1EE] transition-all duration-700 hover:p-7 mx-auto w-72 h-72 rounded-full'>
        <div className='w-full  flex-col h-full mx-auto relative flex justify-center items-center '>
          <img className='w-full relative h-full mx-auto rounded-full' src={img} alt="" />
          <div className='w-full h-full top-0 rounded-full left-0 absolute bg-gray-400 flex justify-center items-center opacity-0 hover:opacity-100 bg-opacity-0 transition-all duration-500  hover:bg-opacity-30'>
            <p className='text-6xl  font-maven text-[#f5f0f0fa] font-medium '>
              {petCategory}
            </p>
          </div>
        </div>
      </div>
    </Link>


  );
};

export default PetCategoryCard