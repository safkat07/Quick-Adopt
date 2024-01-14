import React, { useEffect, useState } from 'react';
import UseAuth from './UseAuth';
import UseAxiosBaseURL from './UseAxiosBaseUrl';

const UseFavorites = () => {
    const baseURL = UseAxiosBaseURL()
    const { user } = UseAuth()
    const recentUserEmail = user?.email
    const [favPets, setFavPets] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await baseURL.get('/api/v1/favorites')
                const allData = response.data
                const filterData = allData?.filter(data => data.favUserEmail == recentUserEmail)
                setFavPets(filterData)
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
            finally {
                setIsLoading(false)

            }
        }
        fetchData()
    }, [recentUserEmail, baseURL])
    return [favPets, isLoading]
};

export default UseFavorites;