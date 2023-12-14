import React from 'react';
import MainTitle from '../../../Components/UseableComponents/Title/MainTitle';
import UseAllPets from '../../../Hooks/UseAllPets';
import LoadingSpinner from '../../../Components/UseableComponents/Loader/LoadingSpinner';
import FindAPuppyCard from './FindAPuppyCard';

const FindAPuppy = () => {
    const [allPets, isLoading] = UseAllPets()

    return (
        <div>
            <MainTitle maintitle={"Find Your Favourite Puppy Here"}></MainTitle>
            <div>
                {
                    isLoading ? <div className='flex justify-center items-center'>
                        <LoadingSpinner></LoadingSpinner>
                    </div>
                        :
                        <div>
                            {
                                allPets?.map(allPet => <FindAPuppyCard key={allPet._id} {...allPet}></FindAPuppyCard>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default FindAPuppy;