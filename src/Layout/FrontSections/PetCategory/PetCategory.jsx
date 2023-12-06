import React, { useEffect, useState } from 'react';
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import UseAxiosBaseURL from '../../../Hooks/UseAxiosBaseUrl';
import PetCategoryCard from './PetCategoryCard';

const PetCategory = () => {
    const baseURL = UseAxiosBaseURL()
    const [categories, setCategories] = useState([])
    const [dataLength] = useState(4)
    useEffect(() => {
        baseURL.get('/api/v1/allpetcategory')
            .then(data => {
                setCategories(data.data)
            })
    }, [])
    return (
        <MainContainer>
            <div className='flex justify-between items-center'>
                <h2 className='text-6xl font-semibold font-maven'>12+ Pet Category Available</h2>
                <button className="no-underline text-2xl font-maven bg-white border-none px-3 hover:bg-[#327451] rounded-md py-1 hover:text-white hover:px-7 transition-all duration-700 text-black">See All</button>
            </div>
            <div className='grid my-20 grid-cols-4 justify-center items-center'>
                {
                    categories.slice(0, dataLength).map(category => <PetCategoryCard key={category._id} {...category} ></PetCategoryCard>)
                }
            </div>
        </MainContainer>
    );
};

export default PetCategory;