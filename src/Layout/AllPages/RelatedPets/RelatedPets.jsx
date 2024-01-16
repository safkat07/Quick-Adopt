import React, { useEffect, useState } from 'react';
import UseAxiosBaseURL from '../../../Hooks/UseAxiosBaseUrl';
import LoadingSpinner from '../../../Components/UseableComponents/Loader/LoadingSpinner';
import RelatedPetsCard from './RelatedPetsCard';
import FindAPuppyCard from '../FindAPuppy/FindAPuppyCard';

const RelatedPets = ({ PetCategory }) => {
    const baseURL = UseAxiosBaseURL();
    const [isLoading, setIsLoading] = useState(true);
    const [relataedPetCategory, setRelatedPetCategory] = useState([]);

    useEffect(() => {
        // Fetch data and filter related pets
        const fetchData = async () => {
            try {
                const response = await baseURL.get('/api/v1/allpets');
                const allPetsData = response.data;
                const filterCategory = allPetsData.filter(pets => pets.PetCategory === PetCategory);
                setRelatedPetCategory(filterCategory);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [PetCategory, baseURL]);

    return (
        <div>
            <div>
                {isLoading ? (
                    <div className="flex justify-center h-[50vh] items-center">
                        <LoadingSpinner></LoadingSpinner>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        {relataedPetCategory?.map(petCat => (
                            <FindAPuppyCard key={petCat._id} {...petCat}></FindAPuppyCard>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RelatedPets;
