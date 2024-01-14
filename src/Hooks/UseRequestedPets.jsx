import React, { useEffect, useState } from 'react';
import UseAxiosBaseURL from './UseAxiosBaseUrl';
import UseAuth from './UseAuth';

const UseRequestedPets = () => {
    const baseURL = UseAxiosBaseURL()
    const { user } = UseAuth()
    const recentUserEmail = user?.email
    const [allRequestedPets, setAllRequestedPets] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await baseURL.get(`/api/v1/allpets?PetOwnerEmail=${recentUserEmail}`)
                const data = response.data
                const request = data.filter(req => req.PetStatus == "Requested")
                setAllRequestedPets(request)
            }
            catch (error) {
                console.error(error)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, )




    return [allRequestedPets, isLoading]
};

export default UseRequestedPets;