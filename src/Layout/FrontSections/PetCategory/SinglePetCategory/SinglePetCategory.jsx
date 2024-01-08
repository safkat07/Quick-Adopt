import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import UseAxiosBaseURL from '../../../../Hooks/UseAxiosBaseUrl';
import MainContainer from '../../../../Components/UseableComponents/MainContainer/MainContainer';
import LoadingSpinner from '../../../../Components/UseableComponents/Loader/LoadingSpinner';
import MainTitle from '../../../../Components/UseableComponents/Title/MainTitle';
import FindAPuppyCard from '../../../AllPages/FindAPuppy/FindAPuppyCard';

const SinglePetCategory = () => {
    const location = useLocation()
    const category = location.state.petCategory
    const baseURL = UseAxiosBaseURL()
    const [filterPets, setFilterPets] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        // Fetch data and filter related pets
        const fetchData = async () => {
            try {
                const response = await baseURL.get('/api/v1/allpets');
                const allPetsData = response.data;
                const filterCategory = allPetsData.filter(pets => pets.PetCategory == category);
                setFilterPets(filterCategory);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [category, baseURL]);

    return (
        <div>
            {
                isLoading ? <div className='flex justify-center items-center h-1/2'>
                    <LoadingSpinner></LoadingSpinner>
                </div>
                    :
                    <div>
                        {
                            filterPets.length == 0 ? <div>
                                <p className='font-monster text-3xl font-semibold my-4 lg:text-5xl text-center'>{category} Category</p>
                                <MainTitle maintitle={"No Pet Found  In this Categoery"} ></MainTitle>
                            </div>
                                :
                                <div className='grid grid-cols-3 justify-center items-center'>
                                    {
                                        filterPets.map(pets => <FindAPuppyCard key={pets._id} {...pets}></FindAPuppyCard>)
                                    }
                                </div>
                        }
                    </div>
            }
        </div>
    );
};

export default SinglePetCategory;