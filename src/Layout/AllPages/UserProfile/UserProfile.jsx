import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import MainContainer from '../../../Components/UseableComponents/MainContainer/MainContainer';
import UseAxiosBaseURL from '../../../Hooks/UseAxiosBaseUrl';
import LoadingSpinner from '../../../Components/UseableComponents/Loader/LoadingSpinner';
import FindAPuppyCard from '../FindAPuppy/FindAPuppyCard';
const UserProfile = () => {
    const baseurl = UseAxiosBaseURL()
    const location = useLocation()
    const userName = location.state?.PetOwnerName
    const [allFilterPets, setAllFilterPets] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await baseurl.get('/api/v1/allpets')
                const allpets = response.data
                const filterByUser = allpets.filter(user => user?.PetOwnerName == userName)
                setAllFilterPets(filterByUser)
            }
            catch {
                console.error('Error data fetch', error)
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchData()
    }, [userName, baseurl])
    return (
        <MainContainer>
            <div className='flex  justify-start '>
                <div className='w-1/4 '>
                    <div className='w-80 h-80 shadow-md border-4 bg-transparent rounded-md border-[#FDFDFE]'>
                        <div className='flex  flex-col justify-center items-center h-3/4 text-9xl'>
                            <FaRegUserCircle></FaRegUserCircle>
                            <p className='text-3xl'>{userName}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-4xl font-maven font-semibold'>Pet Added By {userName}</p>
                    <div>
                        {
                            isLoading ? <div className="flex justify-center h-[50vh] items-center">
                                <LoadingSpinner></LoadingSpinner>
                            </div> :

                                <div className='grid space-x-5 grid-cols-2 '>
                                    {
                                        allFilterPets?.map(filterPet => <FindAPuppyCard key={filterPet._id} {...filterPet}></FindAPuppyCard>)
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        </MainContainer>

    );
};

export default UserProfile;