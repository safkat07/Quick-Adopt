import React, { useEffect, useState } from 'react';
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import UseAxiosBaseURL from '../../../Hooks/UseAxiosBaseUrl';
import PetCategoryCard from './PetCategoryCard';
import MainButton from '../../../Components/UseableComponents/Buttons/MainButton';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../../Components/UseableComponents/Loader/LoadingSpinner';
import MainTitle from '../../../Components/UseableComponents/Title/MainTitle';

const PetCategory = () => {
    const baseURL = UseAxiosBaseURL()
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [dataLength] = useState(4)
    useEffect(() => {
        baseURL.get('api/v1/allpetcategory')
            .then(data => {
                setCategories(data.data)
                setIsLoading(false)
            })
    }, [])
    return (
        <MainContainer>
            <div className='flex md:flex-row flex-col justify-between items-center'>
                <MainTitle maintitle={"12+ Pet Category Available"}></MainTitle>
                <Link to='/seeallpets'>
                    <MainButton btnText={"See All"}></MainButton>
                </Link>
            </div>
            <div className='my-8'>
                {
                    isLoading ? <div className='flex justify-center items-center'>
                        <LoadingSpinner></LoadingSpinner>
                    </div> :
                        <div className='grid my-20 space-y-5 xl:grid-cols-4 md:grid-cols-2 justify-center items-center'>
                            {
                                categories.slice(0, dataLength).map(category => <PetCategoryCard key={category._id} {...category} ></PetCategoryCard>)
                            }
                        </div>
                }
            </div>
        </MainContainer>
    );
};

export default PetCategory;